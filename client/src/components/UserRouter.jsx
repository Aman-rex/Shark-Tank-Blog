import { useSelector } from "react-redux/es/hooks/useSelector"
import { Outlet,Navigate } from "react-router-dom"
import { userSelector } from "../redux/user/userSlice"
export const AdminRouter=()=>{
    const {currentUser}=useSelector(userSelector)
    return currentUser.role=='Admin'?<Outlet/>:<Navigate to='/'/>
}