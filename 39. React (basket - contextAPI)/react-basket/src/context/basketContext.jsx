import { createContext, useState } from "react";

export const BasketContext = createContext();

// eslint-disable-next-line react/prop-types
export const BasketContextProvider = ({ children }) => {
  //initial state  - local storage
  let localBasket = JSON.parse(localStorage.getItem("basket"));
  if (!localBasket) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
  let [basket, setBasket] = useState(localBasket || []);
  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

