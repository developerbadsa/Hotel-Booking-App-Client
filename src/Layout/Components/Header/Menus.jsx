import { NavLink } from "react-router-dom";
import UseUser from "../../../Hooks/UseUser";
import Swal from "sweetalert2";

const Menus = () => {
      const { user, logOut } = UseUser()


      const handleLogOut = () => {
            logOut()
                  .then(() => {
                        Swal.fire(
                              'Successfully Logged Out',
                              'success'
                        )
                  })
      }


      return (
            <>
                  <li className="flex items-center justify-center">
                        <NavLink
                              to="/"
                              className={({ isActive, isPending }) =>
                                    isPending ? "bg-red-400" : isActive ? " text-green-500" : ""
                              }
                        >
                              Home
                        </NavLink>
                  </li>
                  <li className="flex items-center justify-center">
                        <NavLink
                              to="/rooms"
                              className={({ isActive, isPending }) =>
                                    isPending ? "bg-red-400" : isActive ? " text-green-500" : ""
                              }
                        >
                              Rooms
                        </NavLink>
                  </li>

                  {user && <li className="flex items-center justify-center">
                        <NavLink
                              to="/my_bookings"
                              className={({ isActive, isPending }) =>
                                    isPending ? "bg-red-400" : isActive ? " text-green-500" : ""
                              }
                        >
                              My Bookings
                        </NavLink>
                  </li>}
                  <li className="flex items-center justify-center">
                        <NavLink
                              to="/about"
                              className={({ isActive, isPending }) =>
                                    isPending ? "bg-red-400" : isActive ? " text-green-500" : ""
                              }
                        >
                              About
                        </NavLink>
                  </li>
                  <li className="flex items-center justify-center">
                        <NavLink
                              to="/contact"
                              className={({ isActive, isPending }) =>
                                    isPending ? "bg-red-400" : isActive ? " text-green-500" : ""
                              }
                        >
                              Contact
                        </NavLink>
                  </li>

                  {!user && <>
                        <li className="flex items-center justify-center">
                              <NavLink
                                    to="/register"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "bg-red-400" : isActive ? " text-green-500" : ""
                                    }
                              >
                                    Register
                              </NavLink>
                        </li>
                        <li className="flex items-center justify-center">
                              <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                          isPending ? "bg-red-400" : isActive ? " text-green-500" : ""
                                    }
                              >
                                    Login
                              </NavLink>
                        </li>

                  </>

                  }
                  {
                        user && <li className="flex items-center justify-center">
                              <NavLink onClick={handleLogOut}
                                    className={({ isActive, isPending }) =>
                                          isPending ? "bg-red-400" : isActive ? " " : ""
                                    }
                              >
                                    LogOut
                              </NavLink>
                        </li>
                  }
            </>
      );
};

export default Menus;
