import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../components/common/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import UpdateProfile from "../Pages/Update-Profile/UpdateProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AllArtCraftItem from "../Pages/AllArtCraftItem/AllArtCraftItem";
import AddArtCarftItem from "../Pages/AddArtCarftItem/AddArtCarftItem";
import MyListItems from "../Pages/MyListItems/MyListItems";
import ArtCraftDetails from "../Pages/Home/ArtCraftDetails/ArtCraftDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch('http://localhost:5000/artCraft')
      },

      {
        path: "/allArt&Craft",
        element:  <AllArtCraftItem/>    ,
      },

      {
        path: "/addItem",
        element: 
       <PrivateRoute>
         <AddArtCarftItem/>
       </PrivateRoute>
      },
      {
        path: "/myList",
        element: 
       <PrivateRoute>
         <MyListItems/>
       </PrivateRoute>
      },

      {
        path: "/updateProfile",
        element: 
       <PrivateRoute>
         <UpdateProfile/>
       </PrivateRoute>
      },

      {
        path: "/artCraftDetails/:id",
        element: 
       <PrivateRoute>
        <ArtCraftDetails/>
       </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/artCraft/${params.id}`)
      },

      {
        path: "/login",
        element: <Login/>,
      },

      {
        path: "/register",
        element: <Register/>,
      },

      // {
      //   path: "/price",
      //   element: <PrivateRoute>
      //     <Price/>
      //   </PrivateRoute>,
      // },

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
