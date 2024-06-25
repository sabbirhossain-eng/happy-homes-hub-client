import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ItemCard from "../../Components/ItemCard";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { Helmet } from "react-helmet";

const PetListing = () => {
  const axiosPublic = useAxiosPublic();
  const [searchItem, setSearchItem] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");

  const { data: items = [] } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await axiosPublic.get("/pets");
      return res.data;
    },
  });

  const adoptedItems = items.filter(
    (item) =>
      item.adopted === false &&
      (item.name.toLowerCase().startsWith(searchItem.toLowerCase()) ||
        searchItem === "") &&
      (searchCategory === "all" || item.category === searchCategory)
  );

  const sortedItems = adoptedItems.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  // Handler for category dropdown change
  const handleCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Happy Homes | Pet Listing</title>
      </Helmet>
      <div className="flex justify-center items-center gap-2 mt-2">
        <div>
          <input
            type="text"
            placeholder="Search pet name..."
            value={searchItem}
            className="input input-bordered border-primary-light w-full relative"
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <CiFilter className="text-primary-light text-4xl" />
        </div>
        <div>
          <select
            className="select border-primary-light w-full"
            value={searchCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All Categories</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="rabbit">Rabbit</option>
            <option value="bird">Bird</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-8 px-4 lg:px-8">
        {sortedItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PetListing;
