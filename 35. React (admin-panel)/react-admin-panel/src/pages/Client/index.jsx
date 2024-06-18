import { Outlet } from "react-router-dom";
import ClientHeader from "../../components/Client/header";
import { useEffect, useState } from "react";
import controller from "../../services/index";
import { endpoints } from "../../services/constants";

const ClientRoot = () => {
  //get countries
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    controller.getAll(endpoints.countries).then((resp) => {
      setCountries(resp.data);
    });
  }, []);
  return (
    <>
      <ClientHeader />
      <Outlet context={[countries, setCountries]}/>
    </>
  );
};

export default ClientRoot;
