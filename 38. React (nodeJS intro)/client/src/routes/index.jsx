import MainRoot from "../pages/MainRoot";
import Home from "../pages/Home"
import Blogs from "../pages/Blogs"
import BlogDetail from "../pages/BlogDetail"
import AddBlog from "../pages/AddBlog"
import NotFound from "../pages/NotFound"
import Login from "../pages/Login"
import Register from "../pages/Register"
import User from "../pages/User"
import EditBlog from "../pages/EditBlog";

export const ROUTES = [
    {
        element: <MainRoot/>,
        path: '/',
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'blogs',
                element: <Blogs/>
            },
            {
                path: 'blogs/:id',
                element: <BlogDetail/>
            },
            {
                path: 'blog/edit/:id',
                element: <EditBlog/>
            },
            {
                path: 'sign-in',
                element: <Login/>
            },
            {
                path: 'sign-up',
                element: <Register/>
            },
            {
                path: 'user',
                element: <User/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
            {
                path: 'add-blog',
                element: <AddBlog/>
            }
        ],
    }
]
