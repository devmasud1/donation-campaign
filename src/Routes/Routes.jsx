import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from "../Pages/Home/Home";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";
import Category from "../Pages/Category/Category";




const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/AllData.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: () => fetch('/AllData.json')
            },

        ]
    }
])

export default Routes;