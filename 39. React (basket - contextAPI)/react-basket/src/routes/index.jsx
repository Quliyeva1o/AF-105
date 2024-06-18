import MainRoot from "../pages/MainRoot";
import Home from "../pages/Home";
import Basket from "../pages/Basket";

export const ROUTES = [
  {
    element: <MainRoot />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
];
