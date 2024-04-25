import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../components/common/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import UpdateProfile from "../Pages/Update-Profile/UpdateProfile";
import PropertyDetails from "../Pages/Home/Property_Details/PropertyDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Price from "../Pages/Price/Price";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/updateProfile",
        element: 
       <PrivateRoute>
         <UpdateProfile/>
       </PrivateRoute>
       ,
      },
      {
        path: "/propertyDetails/:id",
        element: 
       <PrivateRoute>
        <PropertyDetails/>
       </PrivateRoute> 
        ,
        loader:() => fetch('/categories.json')
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },

      {
        path: "/price",
        element: <PrivateRoute>
          <Price/>
        </PrivateRoute>,
      },

      {
        path: "/contact",
        element: <Contact />,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/admin",
        element: <div>Admin</div>,
      },
    ],
  },
]);
