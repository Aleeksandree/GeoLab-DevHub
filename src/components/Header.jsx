import { Link } from "react-router-dom";
import Home from "./Home";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <div className="w-full bg-[#F8EBE6]  flex items-center ">
      <div className="w-full max-w-[1440px] flex  mx-auto  rounded-2xl justify-between items-center px-[15px] py-7   ">
        <Link className="flex items-center gap-2.5" to={"/"}>
          <img
            className="w-[75px] rounded-2xl "
            src="https://imgs.search.brave.com/fOFyX3qA8GvL48Msw1m1Pn9gcdS76c7swuFquU-WMjA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L2xldHRlci1xLWlu/aXRpYWwtbG9nb181/MzA1MjEtMTI0Ny5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA"
            alt="Logo-icon"
          />
          <h2 className="text-purple-800 font-bold text-2xl">GeoLab DevHub</h2>
        </Link>
        <HeaderNav />

        <Link to={"/register"}>
          <button className="w-[120px] h-[50px] rounded-2xl bg-purple-800 text-white font-medium">
            <Link to={"/register"}>რეგისტრაცია </Link>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
