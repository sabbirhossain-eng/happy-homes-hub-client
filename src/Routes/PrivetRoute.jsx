import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivetRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
       return <progress className="progress w-56 flex justify-center items-center"></progress>
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} replace to="/login"/>
};

export default PrivetRoute;