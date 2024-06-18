import { createContext } from "react";
import FavoritesContextProvider from "./favoritesContext";
export const MainContext = createContext("");

function MainContextProvider({ children }) {
    return (
        <FavoritesContextProvider>
            {children}
        </FavoritesContextProvider>
    )
}

export default MainContextProvider