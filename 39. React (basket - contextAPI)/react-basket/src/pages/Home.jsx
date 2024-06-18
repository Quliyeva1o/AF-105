import { useContext, useEffect, useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { BasketContext } from "../context/basketContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { basket, setBasket } = useContext(BasketContext);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px auto",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "16px" }}>
        Products Basket React App
      </h3>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid gray",
          borderRadius: "6px",
          padding: "24px",
          width: "70%",
          alignItems: "center",
        }}
      >
        {products &&
          products.map((product) => {
            return (
              <li key={product.id}>
                <span>
                  {product.title} ({product.price})
                </span>
                <button
                  onClick={() => {
                    const foundItem = basket.find((x) => x.id == product.id);
                    if (foundItem) {
                      foundItem.count += 1;
                      setBasket([...basket]);
                      localStorage.setItem("basket", JSON.stringify(basket));
                    } else {
                      const basketProduct = {...product};
                      basketProduct.count = 1;
                      setBasket((currentBasket)=>{
                        currentBasket.push(basketProduct);
                        localStorage.setItem("basket", JSON.stringify(currentBasket));
                        return [...currentBasket];
                      });
                    }
                  }}
                >
                  <ShoppingBasketIcon />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
