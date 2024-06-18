import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Login = ({ setIsLogged }) => {
  return (
    <button
      className={`${styles['btn-primary']} ${styles.text}`}
      onClick={() => {
        setIsLogged(true);
        //local storage set is logged
        localStorage.getItem("isLogged") ||
          localStorage.setItem("isLogged", true);
      }}
    >
      Login
    </button>
  );
};

Login.propTypes = {
  setIsLogged: PropTypes.func,
};

export default Login;
