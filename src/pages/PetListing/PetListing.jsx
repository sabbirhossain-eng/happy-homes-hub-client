import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ItemCard from "../../Components/ItemCard";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";


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
      item.property === "adopted" &&
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
      <div className="flex justify-center items-center gap-2">
        <div>
          <input
            type="text"
            placeholder="Search pet name..."
            value={searchItem}
            className="input input-bordered input-warning w-full relative"
            onChange={handleSearchChange}
          />
        </div>
        <div>
            <FaSearchengin className="text-[#4e2c2c] text-4xl  "/>
        </div>
        <div>
          <select className="select select-warning w-full"
          value={searchCategory} onChange={handleCategoryChange}>
            <option value="all">All Categories</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="rabbit">Rabbit</option>
            <option value="bird">Bird</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-8">
        {sortedItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PetListing;
