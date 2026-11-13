import { Link } from "react-router-dom";
import Home from "./Home";
import HeaderNav from "./HeaderNav";
import GeoLab from "../assets/GeoLab.png";
import { useContext, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { ModeContext } from "../Context/Context";

const Header = () => {
  const { light, setLight, swichMode } = useContext(ModeContext);
  return (
    <div
      className={`w-full flex items-center sticky top-0 z-50  ${
        light ? "bg-mist-900" : "bg-blue-100 "
      }`}
    >
      <div className="w-full max-w-[1440px] flex  mx-auto  rounded-2xl justify-between items-center px-[15px] py-7   ">
        <Link className="flex items-center gap-2.5" to={"/"}>
          <img className="w-[55px] rounded-2xl " src={GeoLab} alt="Logo-icon" />
          <h2 className="text-purple-600 font-bold text-2xl">GeoLab DevHub</h2>
        </Link>
        <HeaderNav light={light} />

        <div className="flex gap-7">
          <Link to={"/register"}>
            <button
              className={`w-[120px] h-[50px] rounded-2xl   font-medium cursor-pointer" ${light ? "text-black" : "text-white"}`}
            >
              <Link
                to="/register"
                className={`w-[130px] h-[50px] rounded-2xl flex items-center justify-center font-medium ${
                  light ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                რეგისტრაცია
              </Link>
            </button>
          </Link>
          <button
            onClick={swichMode}
            className={` cursor-pointe flex justify-center items-center  ${light ? "text-white" : "text-black"} `}
          >
            {light ? <FaToggleOn size={35} /> : <FaToggleOff size={35} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
