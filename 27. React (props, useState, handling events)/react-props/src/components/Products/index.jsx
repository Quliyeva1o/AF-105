import List from "../List";
import ListItem from "../ListItem";
import PropTypes from "prop-types";

const Products = ({ products }) => {
  return <List>
    {products && products.map((product)=>{
      return <ListItem key={product.id} product={product}/>
    })}
  </List>;
};

Products.propTypes = {
  products: PropTypes.array
}

export default Products;
