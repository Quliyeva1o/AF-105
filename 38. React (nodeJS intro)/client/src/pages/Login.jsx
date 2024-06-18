import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import controller from "../services/api/requests.js";
import Swal from "sweetalert2";
import loginValidation from "../validations/login.validation.js";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../services/redux/slices/userSlice.js";
import { useEffect } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(()=>{
    if(user.id){
      navigate('/');
    }
  },[navigate,user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async ({ email, password }, actions) => {
      const response = await controller.post('/login',{email:email,password:password});
      
      if (response.auth) {
        actions.resetForm();
        dispatch(login(response.user));
        //token
        const token = response.token;
        Cookies.set('token', token, {expires: 1});
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: response.message,
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: response.message,
          showConfirmButton: false,
          timer: 1000,
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
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Login</h3>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          width: "100%",
        }}
      >
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
        <Link to={"/sign-up"}>dont have an account?</Link>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Login;
