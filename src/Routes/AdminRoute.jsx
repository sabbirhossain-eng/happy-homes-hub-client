import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "@material-tailwind/react";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
   const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
       return <Spinner className="h-16 w-16" color="amber" />
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate state={{from: location}} replace to="/"/>
};

export default AdminRoute;