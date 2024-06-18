import PropTypes from "prop-types";

const SearchProduct = ({ setQuery }) => {
  return (
    <input
      onKeyUp={(e) => {
        setQuery(e.target.value);
      }}
      placeholder="search product"
    />
  );
};

SearchProduct.propTypes = {
  setQuery: PropTypes.func,
};

export default SearchProduct;
