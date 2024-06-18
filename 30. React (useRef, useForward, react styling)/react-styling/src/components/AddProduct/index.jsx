import { useState } from "react";
import controller from "../../services";
import Product from "../../classes/product.class";
import PropTypes from "prop-types";
import { endpoints } from "../../services/constants";

const AddProduct = ({setProducts}) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    isDiscounted: false,
  });
  function handleSubmit(e) {
    e.preventDefault();
    const product = new Product(newProduct.name, newProduct.price, newProduct.isDiscounted);
    setNewProduct({name: '',price:'',isDiscounted: false});
    controller.post(endpoints.products,product).then((res)=>{
      setProducts((products)=>{
        return [...products, res];
      })
    })
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct, name: e.target.value})} type="text" placeholder="product name" />
      <input value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct, price: e.target.value})} type="number" min={0} placeholder="product price" />
      <label htmlFor="isDiscounted">is Discounted? </label>
      <input value={newProduct.isDiscounted} onChange={(e)=>setNewProduct({...newProduct, isDiscounted: e.target.checked})} id="isDiscounted" type="checkbox" />
      <button type="submit">add</button>
    </form>
  );
};

AddProduct.propTypes = {
  setProducts: PropTypes.func
}

export default AddProduct;
