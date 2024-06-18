import PropTypes from "prop-types";

const Title = ({ name }) => {
  return <span>{name}</span>;
};

Title.propTypes = {
  name: PropTypes.string,
};

export default Title;
