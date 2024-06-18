import { createContext, useState } from "react";
export const FavoritesContext = createContext("");
import PropTypes from "prop-types";

function FavoritesContextProvider({ children }) {
  //global state
  if (!JSON.parse(localStorage.getItem("favorites"))) {
    localStorage.setItem("favorites", JSON.stringify([]));
  }
  let localFavorites = JSON.parse(localStorage.getItem("favorites"));
  const [favorites, setFavorites] = useState(localFavorites);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FavoritesContextProvider;
