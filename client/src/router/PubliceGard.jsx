
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PubliceGard = () => {
    const {user} = useSelector((state)=>state.Auth)
    if(localStorage.getItem("user")){
        return <Outlet/>
    }
    return user ? <Navigate to= "/"/> : <Outlet/> 
};

export default PubliceGard;


