import {
  Calendar,
  Calendar1Icon,
  CalendarDays,
  GraduationCap,
  RocketIcon,
} from "lucide-react";
import itcourse from "../assets/itcourse.png";
import { FaPeopleGroup } from "react-icons/fa6";
const Info = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="max-w-[1400px]  w-full justify-center gap-[120px] flex  mx-auto">
        <div className=" w-[450px] flex flex-col gap-4">
          <span className="text-purple-900 bg-fuchsia-200 w-[145px] text-center rounded-2xl font-bold">
            ჩვენ შესახებ
          </span>
          <h2 className="text-purple-900 font-extrabold text-4xl flex flex-col">
            <span className="font-bold"> გაეცანი</span> GeoLab DevHub
          </h2>
          <p className="text-black font-medium">
            ინტერაქტიული განათლების სივრცე, სადაც სწავლა, პრაქტიკა და რეალური
            პროექტები ერთიანდება
          </p>
        </div>

        {/*  */}
        <div className="relative">
          <img className="w-[450px] rounded-4xl" src={itcourse} alt="s" />
          <span className=" absolute top-9 left-97 bg-fuchsia-200 w-[130px] min-h-[70px] rounded-[14px] flex justify-center flex-col items-center text-xs">
            <CalendarDays className="text-purple-900 " />
            <span className="flex flex-col items-center font-bold">
              <span className="text-purple-900 font-bold">2015</span> წელს
              დაარსდა
            </span>
          </span>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="max-w-[1400px]  w-full flex justify-center items-center flex-col gap-5 mx-auto">
        <h2 className="font-bold text-purple-600 text-3xl">ჩვენი მისია</h2>
        <div className="flex gap-5 ">
          <div className="flex flex-col w-[300px] rounded-2xl   h-[140px] bg-fuchsia-100   hover:-translate-y-2 transition-transform duration-300 ">
            <div className="flex items-center  gap-1.5 ml-4 mt-4 ">
              <GraduationCap className="text-purple-600" size={40} />
              <h4 className="font-bold  text-[20px]">განათლება</h4>
            </div>
            <span className="text-center font-medium">
              თანამედროვე ტექნოლოგიების შესწავლა და განვითარება
            </span>
          </div>

          <div className="flex flex-col w-[300px] rounded-2xl   h-[140px] bg-orange-100  hover:-translate-y-2 transition-transform duration-300 ">
            <div className="flex items-center  gap-1.5 ml-4 mt-4 ">
              <RocketIcon className="text-orange-500" size={30} />
              <h4 className="font-bold  text-[20px]">პრაქტიკა</h4>
            </div>
            <span className="text-center font-medium">
              რეალური პროექტები და გამოცდილება
            </span>
          </div>
          <div className="flex flex-col w-[300px] rounded-2xl   h-[140px] bg-green-100  hover:-translate-y-2 transition-transform duration-300 ">
            <div className="flex items-center  gap-1.5 ml-4 mt-4 ">
              <FaPeopleGroup className="text-green-500" size={40} />
              <h4 className="font-bold  text-[20px]">საზოგადოება</h4>
            </div>
            <span className="text-center font-medium">
              მოტივირებული და მეგობრული გუნდი
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
