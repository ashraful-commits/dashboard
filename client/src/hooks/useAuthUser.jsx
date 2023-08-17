import { useSelector } from "react-redux";
import { getAuthData } from "../features/auth/authSlice";


const useAuthUser = () => {
    const {user,message,error} = useSelector(getAuthData)
 
  return {user,message,error}
};

export default useAuthUser;
