import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-lg md:text-3xl" />
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#4A4A4A] text-lg font-semibold"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/listedbooks">Listed Books</NavLink>
            </li>

            <li>
              <NavLink to="/pagestoread">Pages to Read</NavLink>
            </li>

            <li>
              <NavLink to="/about">About-Us</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact-Us</NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl md:text-3xl font-bold text-[#23be0a]"
        >
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex md:gap-1 text-[#4A4A4A] text-lg font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/listedbooks">Listed Books</NavLink>
          </li>

          <li>
            <NavLink to="/pagestoread">Pages to Read</NavLink>
          </li>

          <li>
            <NavLink to="/about">About-Us</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact-Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/signin"
          className="bg-[#23be0a] text-white md:text-lg md:font-semibold mr-1 md:mr-4 p-1 md:p-2 md:rounded-lg rounded-sm"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-[#59C6D2] text-white md:text-lg md:font-semibold p-1 md:p-2 md:rounded-lg rounded-sm"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
