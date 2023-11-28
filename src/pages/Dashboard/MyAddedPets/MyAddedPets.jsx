import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import TanStacTable from "../../../Components/TanStacTable/TanStacTable";

const MyAddedPets = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { refetch, data: addedPets = [] } = useQuery({
      
      queryKey: ['addedPets', user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/pets?email=${user.email}`);
        
        return res.data;
      },
    });
    return (
        <div>
           <TanStacTable data={addedPets} refetch={refetch}/>
        </div>
    );
};

export default MyAddedPets;