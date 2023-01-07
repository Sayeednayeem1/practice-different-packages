import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../Pages/Home/About/About";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import AmazingJohnDetails from "../Pages/Home/Projects/AmazingJohnDetails";
import DrWalidDetails from "../Pages/Home/Projects/DrWalidDetails";
import Projects from "../Pages/Home/Projects/Projects";
import QuizCrackersDetails from "../Pages/Home/Projects/QuizCrackersDetails";
import Responsive from "../Pages/Home/React-Slick/ReactSlick";
import Skills from "../Pages/Home/Skills/Skills";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/reactSlider',
                element: <Responsive></Responsive>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/amazingJohn',
                element: <AmazingJohnDetails></AmazingJohnDetails>
            }
            ,
            {
                path: "/drWalid",
                element: <DrWalidDetails></DrWalidDetails>
            },
            {
                path: "/quizCrackers",
                element: <QuizCrackersDetails></QuizCrackersDetails>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
]);