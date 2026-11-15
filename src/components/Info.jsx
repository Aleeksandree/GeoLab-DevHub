import {
  Calendar,
  Calendar1Icon,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  CodeXml,
  Flag,
  GraduationCap,
  RocketIcon,
} from "lucide-react";
import itcourse from "../assets/itcourse.png";
import webDesigne from "../assets/webDesigne.png";
import { FaPeopleGroup } from "react-icons/fa6";
const Info = () => {
  return (
    <div className="flex flex-col gap-[40px] mt-[75px]">
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
          <div className="flex flex-col w-[300px] rounded-2xl   h-[120px] bg-fuchsia-100   hover:-translate-y-2 transition-transform duration-300 items-center justify-center ">
            <div className="flex items-center  gap-1.5 justify-center ">
              <GraduationCap className="text-purple-600" size={40} />
              <h4 className="font-bold  text-[20px]">განათლება</h4>
            </div>
            <span className="text-center font-medium">
              თანამედროვე ტექნოლოგიების შესწავლა და განვითარება
            </span>
          </div>

          <div className="flex flex-col w-[300px] rounded-2xl   h-[120px] bg-orange-100  hover:-translate-y-2 transition-transform duration-300 justify-center items-center ">
            <div className="flex items-center  gap-1.5  ">
              <RocketIcon className="text-orange-500" size={30} />
              <h4 className="font-bold  text-[20px]">პრაქტიკა</h4>
            </div>
            <span className="text-center font-medium">
              რეალური პროექტები და გამოცდილება
            </span>
          </div>
          <div className="flex flex-col w-[300px] rounded-2xl  justify-center items-center  h-[120px] bg-green-100  hover:-translate-y-2 transition-transform duration-300 ">
            <div className="flex items-center  gap-1.5  ">
              <FaPeopleGroup className="text-green-500" size={40} />
              <h4 className="font-bold  text-[20px]">საზოგადოება</h4>
            </div>
            <span className="text-center font-medium">
              მოტივირებული და მეგობრული გუნდი
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 3 */}

      <div className="w-full max-w-[1440px]  mx-auto flex-col  ">
        <h2 className="font-bold text-purple-600 text-[25px] flex bg-blue-100 pl-6 pb-2 ">
          განვითარების ისტორია
        </h2>
        <div className="flex gap-1 bg-purple-100 rounded-4xl p-4 justify-between">
          <div className="flex flex-col items-center text-center gap-1 w-[200px] shrink-0">
            <div
              className="bg-fuchsia-200 w-12 h-12 rounded-full flex items-center
            justify-center"
            >
              <Flag size={30} className="text-purple-600" />
            </div>
            <span className="bg-fuchsia-200 rounded-full px-4 py-1 font-bold text-purple-900">
              2015
            </span>
            <p className="w-[100px]">GeoLab-ის დაარსება</p>
          </div>
          <span className="block flex-1 h-[2px] bg-purple-500 mt-5 -mx-4"></span>
          <div className="flex flex-col items-center text-center gap-1 w-[200px] shrink-0">
            <div
              className="bg-fuchsia-200 w-12 h-12 rounded-full flex items-center
            justify-center"
            >
              <CodeXml size={30} className="text-purple-600" />
            </div>
            <span className="bg-fuchsia-200 rounded-full px-4 py-1 font-bold text-purple-900">
              2020
            </span>
            <p className="w-[100px]">ახალი პროგრამები</p>
          </div>
          <span className="block flex-1 h-[2px] bg-purple-500 mt-5 -mx-4"></span>
          <div className="flex flex-col items-center text-center gap-1 w-[200px] shrink-0">
            <div
              className="bg-fuchsia-200 w-12 h-12 rounded-full flex items-center
            justify-center"
            >
              <FaPeopleGroup size={30} className="text-purple-600" />
            </div>
            <span className="bg-fuchsia-200 rounded-full px-4 py-1 font-bold text-purple-900">
              2023
            </span>
            <p>საზოგადოების გაფართოება</p>
          </div>
          <span className="block flex-1 h-[2px] bg-purple-500 mt-5 -mx-4"></span>
          <div className="flex flex-col items-center text-center gap-1 w-[200px] shrink-0">
            <div
              className="bg-fuchsia-200 w-12 h-12 rounded-full flex items-center
            justify-center"
            >
              <ChartNoAxesColumnIncreasing
                size={30}
                className="text-purple-600"
              />
            </div>
            <span className="bg-fuchsia-200 rounded-full px-4 py-1 font-bold text-purple-900">
              დღეს
            </span>
            <p>10+ წელი, მეტი შესაძლებლობები და კურსები</p>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}

      <div className="flex justify-center items-center max-w-[1440px] mx-auto gap-6  ">
        <div>
          <h2 className="font-bold text-purple-600 text-[25px] flex ">
            ჩვენი საქმიანობა
          </h2>
          <img
            className="w-[200px] rounded-4xl"
            src={webDesigne}
            alt="webDesigne"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="max-w-[450px]">
            ჩვენ ვქმნით შესაძლებლობებს ახალგაზრდებისთვის, რომლებსაც აინტერესებთ
            განათლება, პრაქტიკული პროექტები და ტექნოლოგიური საზოგადოება.
          </p>
          <div className="flex flex-row gap-4 ">
            <span className="bg-fuchsia-100 rounded-full w-[150px] flex items-center justify-center gap-2 py-2">
              <GraduationCap className="text-purple-600" size={40} />
              კურსები
            </span>
            <span className="bg-orange-100 rounded-full w-[150px] flex items-center justify-center gap-2 py-2">
              <CodeXml size={30} className="text-purple-600" />
              პროექტები
            </span>
            <span className="bg-green-100 rounded-full w-[150px] flex items-center justify-center gap-2 py-2">
              <FaPeopleGroup size={30} className="text-green-500" />
              ივენთები
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
