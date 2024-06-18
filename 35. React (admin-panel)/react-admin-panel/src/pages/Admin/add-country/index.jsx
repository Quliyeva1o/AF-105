import { Button, TextField } from "@mui/material";
import controller from "../../../services/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { endpoints } from "../../../services/constants";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useFormik } from "formik";
import CountrySchema from "../../../validations/country.validation";
import { Helmet } from "react-helmet";

const AddCountry = () => {
  const navigate = useNavigate();
  const data = useOutletContext();
  const setCountries = data[4];

  //formik
  const formik = useFormik({
    initialValues: {
      name: "",
      population: "",
      description: "",
      capital: "",
      flagImg: "",
    },
    onSubmit: (values) => {
      controller.post(endpoints.countries, values);
      setCountries((currentCountries) => {
        return [...currentCountries, values];
      });
      setTimeout(() => {
        navigate("/admin/countries");
      }, 1500);
      toast.success("new country added!", {
        autoClose: 1500,
      });
      values = {
        name: "",
        population: "",
        description: "",
        capital: "",
        flagImg: "",
      };
    },
    validationSchema: CountrySchema,
  });
  return (
    <>
      <Helmet>
        <title>Add Country</title>
      </Helmet>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "200px",
        }}
      >
        <div>
          <TextField
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            id="outlined-basic"
            type="text"
            label="country name"
            variant="outlined"
            sx={{ marginRight: "10px" }}
          />
          {formik.errors.name && (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          )}
          <TextField
            value={formik.values.capital}
            onChange={formik.handleChange}
            name="capital"
            id="outlined-basic"
            type="text"
            label="country capital"
            variant="outlined"
          />
          {formik.errors.capital && (
            <span style={{ color: "red" }}>{formik.errors.capital}</span>
          )}
        </div>
        <div>
          <TextField
            value={formik.values.flagImg}
            onChange={formik.handleChange}
            name="flagImg"
            id="outlined-basic"
            type="text"
            label="country flag image source"
            variant="outlined"
            sx={{ marginRight: "10px" }}
          />
          {formik.errors.flagImg && (
            <span style={{ color: "red" }}>{formik.errors.flagImg}</span>
          )}
          <TextField
            value={formik.values.population}
            onChange={formik.handleChange}
            name="population"
            id="outlined-basic"
            type="number"
            min={0}
            label="country population"
            variant="outlined"
          />
          {formik.errors.population && (
            <span style={{ color: "red" }}>{formik.errors.population}</span>
          )}
        </div>
        <TextField
          value={formik.values.description}
          onChange={formik.handleChange}
          name="description"
          placeholder="country description"
          multiline
          rows={4}
          sx={{ width: "30%" }}
        />
        {formik.errors.description && (
          <span style={{ color: "red" }}>{formik.errors.description}</span>
        )}
        <Button variant="contained" type="submit" color="error">
          Add Country
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddCountry;
