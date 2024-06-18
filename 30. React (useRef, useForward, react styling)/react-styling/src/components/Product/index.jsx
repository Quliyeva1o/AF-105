import AddProduct from "../AddProduct";
import ProductList from "../ProductList";
import ProductItem from "../ProductItem";
import SearchProduct from "../SearchProduct";
import controller from "../../services";
import { endpoints } from "../../services/constants";
import { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  console.log(error);
  useEffect(() => {
    setLoading(true);
    controller
      .getAll(endpoints.products)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((x) => {
    return x.name.trim().toLowerCase().includes(query.trim().toLowerCase());
  });

  return (
    <>
      <AddProduct setProducts={setProducts} />
      <SearchProduct setQuery={setQuery} />
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <ProductList>
          {filteredProducts &&
            filteredProducts.map((product,idx) => {
              return (
                <ProductItem
                  setProducts={setProducts}
                  product={product}
                  key={idx}
                />
              );
            })}
        </ProductList>
      )}
    </>
  );
};

export default Product;
