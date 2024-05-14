import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import FoodDetails from "../pages/FoodDetails";
import AddFood from "../pages/AddFood";
import Foods from "../pages/Foods";
import ErrorPage from "../pages/ErrorPage";
import ManageMyFoods from "../pages/ManageMyFoods";
import PrivateRoute from "./PrivateRoute";
import MyRequests from "../pages/MyRequests";
import UpdateFood from "../pages/UpdateFood";

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
            element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
            loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            },
            {
            path: '/update/:id',
            element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
            loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            },
            {
            path: '/addfood',
            element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            // loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            },
            // {
            // path: '/update/:id',
            // element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>
            // },
            {
            path: '/myadded',
            element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
            },
            {
            path: '/myrequests',
            element: <PrivateRoute><MyRequests></MyRequests></PrivateRoute>
            },
        ],

    },
])


export default router