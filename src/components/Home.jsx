import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen mx-auto  pt-10">
      <div className="max-w-[1440px] flex  mx-auto items-center justify-center gap-[150px]">
        <div className="w-[450px] flex flex-col gap-4 pl-7">
          <span className="flex gap-2  rounded-2xl bg-purple-200   px-0 justify-center w-fit py-1 px items-center  px-3 ">
            <img
              className="max-w-[25px]"
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/nft-rocket-icon-svg-download-png-5498493.png?f=webp&w=512"
              alt="rocket-icon"
            />
            <p className="font-medium text-purple-800 text-xs ">
              ისწავლე,შექმენი,განვითარდი.
            </p>
          </span>
          <h1 className="flex  flex-col items-start font-bold text-3xl gap-1 ">
            შექმენი შენი მომავალი
            <span className="text-purple-700 whitespace-nowrap">
              თექნოლოგიებთან ერთად
            </span>
          </h1>
          <span className="block  font-light text-gray-900">
            ისწავლე პროგრამირება,განავითარე კრეატიულობა და შექმენი რეალური
            პროექტი თანამედროე თექნოლოგიების გამოყენებით
          </span>
          <div className="flex justify-start mt-2 gap-2.5 items-center">
            <Link to={"/cours"}>
              <button className=" py-2 px-4 bg-purple-700 rounded-[15px] text-white py-2">
                აღმოაჩინე კურსები
              </button>
            </Link>
            <Link to={"/infos"}>
              <button className="border-2 rounded-[7px] border-purple-700 py-2 text-purple-600 font-medium px-4 text-sm">
                გაიგე მეტი
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[450px] ">
          <img
            className="rounded-2xl"
            src="https://imgs.search.brave.com/04mjGykn5Bo1kWzBgkHxVcdXkc-ZUMWtSpRCR6VL3nE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZW9s/YWIuZWR1LmdlL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAx/L0dlb0xhYi0xNTM2/eDEwMjQuanBn"
            alt="GeoLab picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
