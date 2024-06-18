import PropTypes from "prop-types";

const ProductList = ({ children }) => {
  return <ul>{children}</ul>;
};

ProductList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ProductList;
