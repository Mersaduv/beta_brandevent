import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
const Header = () => {
  return (
    <div className="">
      {/* desktop nav  */}
      <nav>
        <ul className="w-full  hidden sm:flex   py-4 bg-gray-100">
          <li>
            <NavLink
              className=" text-xl py-4 px-6 bg-gray-500 text-white"
              to="/"
            >
              Logo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-100 text-xl font-bold  py-4 px-6 rounded-md"
                  : " bg-gray-100 text-xl  py-4 px-6 rounded-md"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-100 text-xl font-bold  py-4 px-6 rounded-md"
                  : " bg-gray-100 text-xl  py-4 px-6 rounded-md"
              }
              to="/upcoming-events"
            >
              Upcoming events
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-100 text-xl font-bold  py-4 px-6 rounded-md"
                  : " bg-gray-100 text-xl  py-4 px-6 rounded-md"
              }
              to="/event-archive"
            >
              Event archive
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* first mobile nav  */}
      <nav>
        <ul className="w-full  flex sm:hidden  justify-between  py-4 bg-gray-100">
          <li>
            <NavLink
              className=" text-xl py-4 px-6 bg-gray-500 text-white"
              to="/"
            >
              Logo
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-100 text-xl font-bold  py-4 px-6 rounded-md"
                  : " bg-gray-100 text-xl  py-4 px-6 rounded-md"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-100 text-xl font-bold  py-4 px-6 rounded-md"
                  : " bg-gray-100 text-xl  py-4 px-6 rounded-md"
              }
              to="/upcoming-events"
            >
              Upcoming events
            </NavLink>
          </li>
*/}
          <li>
            <BiMenu className="text-3xl mr-2" />
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Header;
