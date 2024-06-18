import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/index.jsx";
import { DarkModeProvider } from "@rbnd/react-dark-mode";
import FavoritesContextProvider from "./context/favoritesContext.jsx";
import { AuthContext } from "./context/authContext.jsx";
import { useState } from "react";

const routes = createBrowserRouter(ROUTES);

function App() {
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <FavoritesContextProvider>
        <DarkModeProvider>
          <RouterProvider router={routes} />;
        </DarkModeProvider>
      </FavoritesContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
