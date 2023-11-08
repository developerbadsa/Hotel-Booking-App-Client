import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import My_Bookings from "../Pages/My_Bookings/My_Bookings";
import Rooms from "../Pages/Rooms/Rooms";
import MainlayOut from "../Layout/MainlayOut";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouteLoggedIn from "./PrivateRouteLoggedIn";
import Room_details from "../Pages/Room_Details/Room_details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoggedOutPrivate from "./LoggedOutPrivate";

const router = createBrowserRouter([
      {
            path: '/',
            errorElement:<ErrorPage></ErrorPage>,
            element: <MainlayOut></MainlayOut>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/my_bookings',
                        element: <PrivateRouteLoggedIn><My_Bookings></My_Bookings></PrivateRouteLoggedIn>

                  },
                  {
                        path: '/rooms',
                        element: <Rooms></Rooms>
                  },
                  {
                        path: '/room_details/:title',
                        element: <Room_details></Room_details>
                            
                  },
                  {
                        path: '/login',
                        element: <LoggedOutPrivate><Login></Login></LoggedOutPrivate>
                  },
                  {
                        path: '/register',
                        element:<LoggedOutPrivate><Register></Register></LoggedOutPrivate>
                  }
            ]
      }
])

export default router