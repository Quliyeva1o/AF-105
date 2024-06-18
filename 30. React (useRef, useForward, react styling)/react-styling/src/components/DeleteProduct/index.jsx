import PropTypes from "prop-types";
import controller from "../../services";
import { endpoints } from "../../services/constants";

const DeleteProduct = ({ id, setProducts }) => {
  return (
    id && (
      <button
        onClick={() => {
          if (window.confirm("are you sure to delete?")) {
            controller.delete(endpoints.products, id);
            setProducts((products) => {
              return [...products.filter((x) => x.id != id)];
            });
          }
        }}
      >
        delete
      </button>
    )
  );
};

DeleteProduct.propTypes = {
  id: PropTypes.oneOfType[(PropTypes.string, PropTypes.number)],
  setProducts: PropTypes.func,
};

export default DeleteProduct;
