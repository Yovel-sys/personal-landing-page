import {Link} from "react-router-dom";

const NavLink = ({to, children}) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

export default NavLink;
