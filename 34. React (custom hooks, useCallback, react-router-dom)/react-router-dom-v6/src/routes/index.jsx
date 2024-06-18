import AddCategory from "../pages/Admin/AddCategory";
import AdminLayout from "../pages/Admin/AdminLayout";
import UserLayout from "../pages/User/UserLayout";
import Categories from "../pages/Admin/Categories";
import Dashboard from "../pages/Admin/Dashboard";
import Home from "../pages/User/Home";
import Basket from "../pages/User/Basket";
import CategoryDetail from "../pages/User/CategoryDetail";
import NotFound from "../pages/User/NotFound";
import UserCategories from "../pages/User/Categories";

export const ROUTES = [
    //Admin Layout
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: 'add-category',
                element: <AddCategory/>
            },
            {
                path: 'categories',
                element: <Categories/>
            }
        ]
    },
    //User Layout
    {
        path: '',
        element: <UserLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'categories',
                element: <UserCategories/>
            },
            {
                path: 'basket',
                element: <Basket/>
            },
            {
                path: '/category/:id',
                element: <CategoryDetail/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
];
