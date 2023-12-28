import { Link, NavLink } from "react-router-dom";
import Logo from "../images/nexg_tech_logo.jpg";
const Header = () => {
  return (
    <div className="flex p-2 items-center justify-around border border-black">
      <Link to="/">
        <img src={Logo} className=" w-16" />
      </Link>

      <div>
        <ul className=" flex gap-6">
          <li className=" hover:underline font-medium">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className=" hover:underline font-medium">
            <NavLink to="/services">SERVICES</NavLink>
          </li>
          <li className=" hover:underline font-medium">
            <NavLink>TEAM</NavLink>
          </li>
          <li className=" hover:underline font-medium">
            <NavLink>CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
