import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TanStacTable from "../../../Components/TanStacTable/TanStacTable";

const AllPets = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: allPets = [] } = useQuery({
      
      queryKey: ['allPets'],
      queryFn: async () => {
        const res = await axiosSecure.get('/pets/admin');
        
        return res.data;
      },
    });
  return (
    <div>
      <Helmet>
        <title>Happy Homes | Dashboard</title>
      </Helmet>
      <div>
        <TanStacTable data={allPets} refetch={refetch}/>
      </div>
    </div>
  );
};

export default AllPets;
