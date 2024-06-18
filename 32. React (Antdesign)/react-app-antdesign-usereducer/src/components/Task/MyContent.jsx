import Sliders from "./Sliders";
import Home from "./Home";
import Movies from "./Movies";
import PropTypes from "prop-types";

const MyContent = ({ id }) => {
  console.log("key: ", id);
  return <>{id == 1 ? <Home /> : id == 2 ? <Sliders /> : <Movies />}</>;
};

MyContent.propTypes = {
  id: PropTypes.string,
};

export default MyContent;
