import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import FoodDetails from "../pages/FoodDetails";
import AddFood from "../pages/AddFood";
import Foods from "../pages/Foods";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
            index: true,
            element: <Home></Home>,
            // loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/foods`)
            },
            {
            path: '/foods',
            element: <Foods></Foods>
            },
            {
            path: '/login',
            element: <Login></Login>
            },
            {
            path: '/registration',
            element: <Register></Register>
            },
            {
            path: '/food/:id',
            element: <FoodDetails></FoodDetails>,
            loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            },
            {
            path: '/addfood',
            element: <AddFood></AddFood>
            // loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            },
        ],

    },
])


export default router