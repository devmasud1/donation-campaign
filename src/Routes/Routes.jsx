import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from "../Pages/Home/Home";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";




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
            }
        ]
    }
])

export default Routes;