import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ItemCard from "../../Components/ItemCard";
import { Helmet } from "react-helmet";

const Cats = () => {
  const axiosPublic = useAxiosPublic();

  const { data: items = [] } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await axiosPublic.get("/pets");
      return res.data;
    },
  });
  const postItem = items.filter(
    (item) => item.adopted === false && item.category === "cat" && item
  );

  const sortedItems = postItem.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <div>
      <Helmet>
        <title>Happy Homes | Cats</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-8">
        {sortedItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cats;
