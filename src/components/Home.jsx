import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[150px] mx-auto h-[1440px] pt-10">
      <div className="max-w-[1440px] flex justify-between mx-auto">
        <div className="w-[450px] flex flex-col gap-4 pl-7">
          <span className="flex gap-2  rounded-2xl bg-purple-400 max-w-[300px]  ">
            <img
              className="max-w-[25px]"
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/nft-rocket-icon-svg-download-png-5498493.png?f=webp&w=512"
              alt="rocket-icon"
            />
            <p>ისწავლე,შექმენი,განვითარდი.</p>
          </span>
          <h1 className="flex  flex-col items-start font-bold text-3xl gap-1">
            შექმენი შენი მომავალი
            <span className="text-purple-700">თექნოლოგიებთან ერთად</span>
          </h1>
          <span className="block  font-light text-gray-400">
            ისწავლე პროგრამირება,განავითარე კრეატიულობა და შექმენი რეალური
            პროექტი თანამედროე თექნოლოგიების გამოყენებით
          </span>
          <div className="flex justify-start mt-2 gap-2.5">
            <Link to={"/cours"}>
              <button className="w-[195px] bg-purple-700 rounded-[8px] text-white">
                აღმოაჩინე კურსები
              </button>
            </Link>
            <Link to={"/infos"}>
              <button className="w-[105px] border-2  rounded-[7px] border-purple-700">
                გაიგე მეტი
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[450px] border"></div>
      </div>
    </div>
  );
};

export default Home;
