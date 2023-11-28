import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import HeaderTitle from "../../../Components/HeaderTitle";
import MyDonationCamCart from "./MyDonationCamCart";

const MyDonationCampaigns = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: donationCamp = [] } = useQuery({
    queryKey: ["donationCamp", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/createDonation_by_email/${user.email}`
      );

      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Happy Homes | Dashboard</title>
      </Helmet>
      <div>
        <HeaderTitle title={"Your Donation Campaing"} />
      </div>
      <MyDonationCamCart data={donationCamp} refetch={refetch}/>
    </div>
  );
};

export default MyDonationCampaigns;
