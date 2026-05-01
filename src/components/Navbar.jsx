import {Link} from "react-router-dom";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div
        id="navbar-container"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between h-16 items-center">
          <Link
            id="logo"
            to="/"
            className="flex-shrink-0 font-bold text-xl text-blue-600 hover:text-blue-700 transition-colors"
          >
            Yovel Amir
          </Link>

          <div
            id="logo"
            className="flex-shrink-0 font-bold text-xl text-blue-600"
          >
            My Compeny Logo
          </div>
          <div id="nav-links" className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
