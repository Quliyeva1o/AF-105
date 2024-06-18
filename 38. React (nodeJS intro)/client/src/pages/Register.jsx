import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import User from "../classes/User.js";
import userValidation from "../validations/user.validation.js";
import controller from "../services/api/requests.js";
import { endpoints } from "../services/api/constants.js";
import { useSelector } from "react-redux";

import Swal from "sweetalert2";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate("");
  const user = useSelector((state) => state.user);


  useEffect(() => {
    if (user.id) {
      navigate("/");
    }
  }, [navigate, user]);
  function handleImageChange(event, setFieldValue) {
    const file = event.currentTarget.files[0];
    setFieldValue('src',file);
  }
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      repeat_password: "",
      role: "",
      src: "",
    },
    validationSchema: userValidation,
    onSubmit: async ({ username, password, email, src, role }, actions) => {
      const formData = new FormData();
      const newUser = new User(username, email, password, src, role);
      formData.append("src", newUser.src);
      formData.append("username", newUser.username);
      formData.append("password", newUser.password);
      formData.append("email", newUser.email);
      formData.append("isBanned", newUser.isBanned);
      formData.append("banCount", newUser.banCount);
      formData.append("role", newUser.role);
      const response = await controller.post(endpoints.users, formData);
      if (response.error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: response.message,
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        actions.resetForm();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User signed up successfully!",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          navigate("/sign-in");
        });
      }
    },
  });

  return (
    <div
      style={{
        padding: "15px 20px",
        borderRadius: "10px",
        width: "35%",
        margin: "50px auto",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Register</h3>
      <form
        encType="multipart/form-data"
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <TextField
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
          onBlur={formik.handleBlur}
          id="outlined-basic"
          type="text"
          label="username"
          variant="outlined"
        />
        {formik.touched.username && formik.errors.username && (
          <span style={{ color: "red" }}>{formik.errors.username}</span>
        )}
        <TextField
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          onBlur={formik.handleBlur}
          id="outlined-basic"
          type="email"
          label="email"
          variant="outlined"
        />
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        )}
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          onBlur={formik.handleBlur}
          id="outlined-basic"
          type="password"
          label="password"
          variant="outlined"
        />
        {formik.touched.password && formik.errors.password && (
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        )}
        <TextField
          value={formik.values.repeat_password}
          onChange={formik.handleChange}
          name="repeat_password"
          onBlur={formik.handleBlur}
          id="outlined-basic"
          type="password"
          label="repeat password"
          variant="outlined"
        />
        {formik.touched.repeat_password && formik.errors.repeat_password && (
          <span style={{ color: "red" }}>{formik.errors.repeat_password}</span>
        )}
        <TextField
          onChange={(event) => {
            handleImageChange(event, formik.setFieldValue);
          }}
          id="src"
          name="src"
          onBlur={formik.handleBlur}
          type="file"
        />
        {formik.touched.src && formik.errors.src && (
          <span style={{ color: "red" }}>{formik.errors.src}</span>
        )}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            value={formik.values.role}
            onChange={formik.handleChange}
            name="role"
            onBlur={formik.handleBlur}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Role"
          >
            <MenuItem value={"client"}>Client</MenuItem>
            <MenuItem value={"journalist"}>Journalist</MenuItem>
          </Select>
        </FormControl>
        {formik.touched.role && formik.errors.role && (
          <span style={{ color: "red" }}>{formik.errors.role}</span>
        )}
        <Link to={"/sign-in"}>already have an account?</Link>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
