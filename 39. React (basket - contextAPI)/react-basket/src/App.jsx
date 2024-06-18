import { BasketContextProvider } from "./context/basketContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/index.jsx";

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <BasketContextProvider>
      <RouterProvider router={routes} />
    </BasketContextProvider>
  );
}

export default App;
