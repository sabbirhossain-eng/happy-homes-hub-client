import { Helmet } from "react-helmet";
import HeaderTitle from "../../../Components/HeaderTitle";
import RequiestCard from "./RequiestCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdoptionRequest = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: addedPets = [] } = useQuery({
      
      queryKey: ['addedPets'],
      queryFn: async () => {
        const res = await axiosSecure.get('/adoptPets');
        
        return res.data;
      },
    });
  return (
    <div>
      <Helmet>
        <title>Happy Homes | Dashboard</title>
      </Helmet>
      <div>
        <HeaderTitle title={"Your Added Pets"} />
      </div>
     <RequiestCard data={addedPets} refetch={refetch} />
    </div>
  );
};

export default AdoptionRequest;
