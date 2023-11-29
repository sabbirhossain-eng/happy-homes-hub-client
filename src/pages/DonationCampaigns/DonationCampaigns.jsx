import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";
import DonationCampaignCard from "../../Components/DonationCampaignCard";

const DonationCampaigns = () => {
  const axiosPublic = useAxiosPublic();

  const { data: items = [] } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await axiosPublic.get("/donations");
      return res.data;
    },
  });
  const adoptedItems = items.filter( (item) => item.donation === true && item );

  const sortedItems = adoptedItems.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div>
      <Helmet>
        <title>Happy Homes | Donation Campaigns</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-8">
        {sortedItems.map((item) => (
          <DonationCampaignCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DonationCampaigns;
