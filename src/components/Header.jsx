import { Link } from "react-router-dom";
import Home from "./Home";
import HeaderNav from "./HeaderNav";
import GeoLab from "../assets/GeoLab.png";
import { useState } from "react";

const Header = () => {
  const [light, setLight] = useState(false);

  function swichMode() {
    setLight((prev) => !prev);
  }
  return (
    <div
      className={`w-full flex items-center sticky top-0 z-50 ${
        light ? "bg-purple-800" : "bg-amber-950"
      }`}
    >
      <div className="w-full max-w-[1440px] flex  mx-auto  rounded-2xl justify-between items-center px-[15px] py-7   ">
        <Link className="flex items-center gap-2.5" to={"/"}>
          <img className="w-[55px] rounded-2xl " src={GeoLab} alt="Logo-icon" />
          <h2 className="text-fuchsia-300 font-bold text-2xl">GeoLab DevHub</h2>
        </Link>
        <HeaderNav />

        <div className="flex gap-2.5">
          <Link to={"/register"}>
            <button className="w-[120px] h-[50px] rounded-2xl bg-purple-800 text-white font-medium cursor-pointer">
              <Link
                className={`w-[120px] h-[50px] rounded-2xl flex items-center justify-center ${light ? "bg-blue-700" : "bg-purple-800 text-white"}`}
                to={"/register"}
              >
                რეგისტრაცია
              </Link>
            </button>
          </Link>
          <button
            onClick={swichMode}
            className="w-[65px] rounded-2xl   cursor-pointe border "
          >
            Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
