import UserHeader from "../../components/User/Header";
import { Outlet } from "react-router-dom";


const UserLayout = () => {
  return (
   <>
    <UserHeader />
    <Outlet />
   </>
  )
}

export default UserLayout