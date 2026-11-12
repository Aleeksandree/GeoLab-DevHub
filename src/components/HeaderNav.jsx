import { NavLink } from "react-router-dom";

const HeaderNav = ({ light }) => {
  const navBar = [
    {
      nameNav: "მთავარი",
      path: "/",
      id: "1",
    },
    {
      nameNav: "ჩვენ შესახებ",
      path: "/infos",
      id: "2",
    },
    {
      nameNav: "კურსები",
      path: "/cours",
      id: "3",
    },
    {
      nameNav: "პროექტები",
      path: "/projects",
      id: "4",
    },
  ];

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
                ? "border-b-2 border-black text-black pb-1 rounded-[5px]"
                : ""
            }
          >
            {eachNav.nameNav}
          </NavLink>
        </ul>
      ))}
    </div>
  );
};

export default HeaderNav;
