import LogoContainer from "./LogoContainer";
import Menus from "./Menus";


const Navbar = () => {
      return (
            <div className="w-full z-50 navbar bg-base-30 justify-between">
                  <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                  </div>
                  <div className="lg:flex-1 flex justify-start "><LogoContainer></LogoContainer></div>
                  <div className="flex-none hidden lg:block px-6">
                        <ul className="flex gap-4">
                              <Menus></Menus>
                        </ul>
                  </div>
            </div>
      );
};

export default Navbar;