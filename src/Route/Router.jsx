import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../MainLayout/Mainlayout";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import Home from '../Pages/Home'
import Error from "../Components/Error";
import Category from "../Pages/Category";
import CoffeeDetails from "../Pages/CoffeeDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('../../public/categories.json'),
          children: [
            {
              path: '/',
              element: <Category></Category>,
              loader: () => fetch('../../public/coffees.json'),
            },
            {
              path: '/category/:category',
              element: <Category></Category>,
              loader: () => fetch('../../public/coffees.json'),
            },
          ],
        },
        {
          path:'/coffees',
          element:<Coffees></Coffees>,
          loader: () => fetch('../../public/coffees.json'),
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        },
        {
          path:'/coffeedetails/:id',
          loader: () => fetch('../../public/coffees.json'),
          element:<CoffeeDetails></CoffeeDetails>
        },
      ],
    },
  ]);

export {router}