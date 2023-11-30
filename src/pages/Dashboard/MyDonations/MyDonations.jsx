import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import HeaderTitle from "../../../Components/HeaderTitle";
import MyDonationCard from "./MyDonationCard";


const MyDonations = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { refetch, data: myDonation = [] } = useQuery({
      
      queryKey: ['myDonation', user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/my_donations/${user?.email}`);
        
        return res.data;
      },
    });
    return (
        <div>
          <Helmet>
        <title>Happy Homes | Dashboard</title>
      </Helmet>
      <div>
        <HeaderTitle title={"Your Donations"} />
      </div>
      <MyDonationCard data={myDonation} refetch={refetch}/>
        </div>
    );
};

export default MyDonations;