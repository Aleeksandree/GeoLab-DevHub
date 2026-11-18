import { NavLink } from "react-router-dom";
import { navBar } from "./object/footerNav";

const HeaderNav = ({ light }) => {
  return (
    <div className="flex gap-5">
      {navBar.map((eachNav) => (
        <ul
          className={`${light ? "text-white font-bold" : "text-black font-bold"}`}
          key={eachNav.id}
        >
          <NavLink
            to={eachNav.path}
            className={({ isActive }) =>
              isActive
                ? `border-b-2 pb-1 rounded-[5px] ${light ? "border-white" : "border-black"}`
                : ""
            }
          >
            {eachNav.name}
          </NavLink>
        </ul>
      ))}
    </div>
  );
};

export default HeaderNav;
