import { NavLink } from "react-router-dom";

const HeaderNav = () => {
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
        <ul className=" text-fuchsia-300 font-bold" key={eachNav.id}>
          <NavLink to={eachNav.path}>
            <li>{eachNav.nameNav}</li>
          </NavLink>
        </ul>
      ))}
    </div>
  );
};

export default HeaderNav;
