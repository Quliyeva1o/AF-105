import PropTypes from "prop-types";
import classes from  "./index.module.css"

const Logout = ({ setIsLogged }) => {
  return (
    <button
    className={classes.btn}
      onClick={() => {
        setIsLogged(false);
        localStorage.setItem('isLogged',false);
      }}
    >
      Logout
    </button>
  );
};

Logout.propTypes = {
  setIsLogged: PropTypes.func,
};

export default Logout;
