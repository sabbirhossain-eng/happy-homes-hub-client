import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import MyDonationCamCart from "../MyDonationCampaigns/MyDonationCamCart";

const AllDonations = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: donationCamp = [] } = useQuery({
    queryKey: ["donationCamp"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donations");

      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Happy Homes | Dashboard</title>
      </Helmet>
      <div>
      <MyDonationCamCart data={donationCamp} refetch={refetch}/>
      </div>
    </div>
  );
};

export default AllDonations;
