import { GraduationCap } from "lucide-react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import gradicon from "../assets/gradicon.jpg";
import { courseAbout } from "./object/coursInfo";

const Course = () => {
  return (
    <div className="  w-full mx-auto">
      <div className="max-w-360 w-full flex  justify-center gap-40 mx-auto">
        <div className="w-100  flex flex-col gap-2 justify-center">
          <span className="bg-purple-200 gap-1 w-32 font-medium text-purple-800 flex rounded-2xl items-center justify-center h-8">
            <GraduationCap /> კურსები
          </span>
          <h2 className="font-bold text-[25px] text-indigo-600 w-100">
            აღმოაჩინე ჩვენი კურსები
          </h2>
          <p className="font-medium w-95 leading-100%">
            ისწავლე პროგრამირების ტექნოლოგიები, შექმენი პრაქტიკული პროექტები და
            გახდი ტექნოლოგიური საზოგადოების ნაწილი!
          </p>
          <Link>
            <button className="bg-purple-700 text-white w-45 h-10 rounded-2xl flex items-center justify-center hover:bg-blue-800 transition-colors duration-300 cursor-pointer font-medium gap-1">
              კურსების ნახვა <BiRightArrowAlt size={20} />
            </button>
          </Link>
        </div>
        <div className="w-100  flex justify-center">
          <img className="w-100 rounded-2xl" src={gradicon} alt="gradicon" />
        </div>
      </div>
      <div className="max-w-360 rounded-3xl mx-auto bg-purple-100 w-full justify-between flex">
        {courseAbout.map((eachCourse) => {
          const Icon = eachCourse.image;
          return (
            <div className="flex gap-3 items-center justify-center h-20 rounded-2xl">
              <Icon className="text-purple-800" size={35} />
              <span className="flex   flex-col w-70 text-blue-800 font-bold h-20  justify-center items-center">
                {eachCourse.title}
                <span className="text-gray-400 font-medium">
                  {eachCourse.descr}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Course;
