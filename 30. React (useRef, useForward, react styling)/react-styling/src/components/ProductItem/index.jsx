import PropTypes from "prop-types";
import DeleteProduct from "../DeleteProduct";

const ProductItem = ({ product, setProducts }) => {
  return (
    product && (
      <li>
        <span style={{ color: product.isDiscounted ? "green" : "black" }}>
          {product.name}
        </span>
        <DeleteProduct id={product.id} setProducts={setProducts} />
      </li>
    )
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    isDiscounted: PropTypes.bool,
  }),
  setProducts: PropTypes.func,
};

export default ProductItem;
