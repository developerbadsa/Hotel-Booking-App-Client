import { Outlet } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Menus from "./Components/Header/Menus";
import Footer from "./Components/Footer/Footer";


const MainlayOut = () => {


      return (
            <div className="container mx-auto">
                  <div className="drawer">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                             <Navbar></Navbar>
                              <Outlet></Outlet>
                              <Footer></Footer>
                        </div>
                        <div className="drawer-side ">
                              <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                              <ul className="pt-32 p-4 min-h-full bg-base-200 text-xl w-1/2">
                                  <Menus></Menus>
                                    
                              </ul>
                        </div>
                  </div>
            </div>
      )
};

export default MainlayOut;