import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainRoot;
