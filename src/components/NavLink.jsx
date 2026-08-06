import {Link} from "react-router-dom";

const NavLink = ({to, children}) => (
  <Link
    to={to}
    className="text-[594E71] hover:text-[#8A7DA6] px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </Link>
);

export default NavLink;
