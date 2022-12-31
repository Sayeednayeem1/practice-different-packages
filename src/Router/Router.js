import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home/Home";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
]);