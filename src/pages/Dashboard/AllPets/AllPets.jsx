import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllPets = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: allPets = [] } = useQuery({
      
      queryKey: ['allPets'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/pets_by_email/${user.email}`);
        
        return res.data;
      },
    });
  return (
    <div>
      <Helmet>
        <title>Happy Homes | Dashboard</title>
      </Helmet>
    </div>
  );
};

export default AllPets;
