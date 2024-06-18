import Title from "../Title";
import PropTypes from "prop-types";

const ListItem = ({ product }) => {
  return (
    <li>
      <Title name={product.name} />
    </li>
  );
};

ListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
  }),
};

export default ListItem;
