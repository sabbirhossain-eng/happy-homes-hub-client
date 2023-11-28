import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import TanStacTable from "../../../Components/TanStacTable/TanStacTable";
import { Helmet } from "react-helmet";
import HeaderTitle from "../../../Components/HeaderTitle";

const MyAddedPets = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { refetch, data: addedPets = [] } = useQuery({
      
      queryKey: ['addedPets', user?.email],
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
      <div>
        <HeaderTitle title={"Your Added Pets"} />
      </div>
           <TanStacTable data={addedPets} refetch={refetch}/>
        </div>
    );
};

export default MyAddedPets;