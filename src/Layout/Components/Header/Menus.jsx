import { NavLink } from "react-router-dom";

const Menus = () => {
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

                  {false && <li className="flex items-center justify-center">
                        <NavLink
                              to="/my_bookings"
                              className={({ isActive, isPending }) =>
                                    isPending ? "bg-red-400" : isActive ? " text-green-500" : ""
                              }
                        >
                              My Bookings
                        </NavLink>
                  </li>}
                  {true && <>
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
            </>
      );
};

export default Menus;
