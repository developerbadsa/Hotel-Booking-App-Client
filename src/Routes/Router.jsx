import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import My_Bookings from "../Pages/My_Bookings/My_Bookings";
import Rooms from "../Pages/Rooms/Rooms";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Outlet></Outlet>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/my_bookings',
                        element: <My_Bookings></My_Bookings>

                  },
                  {
                        path: '/rooms',
                        element: <Rooms></Rooms>
                  }
            ]
      }
])

export default router