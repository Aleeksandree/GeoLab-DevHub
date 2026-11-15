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
import watch from "../assets/watch.png";
import { Link } from "react-router-dom";
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
        <div className="flex gap-1 bg-purple-300/40 rounded-4xl p-4 justify-between">
          <div className="flex flex-col items-center text-center gap-1 w-[200px] shrink-0">
            <div
              className="bg-fuchsia-200 w-12 h-12 rounded-full flex items-center
            justify-center"
            >
              <Flag size={30} className="text-purple-600" />
            </div>
            <span className="bg-fuchsia-200 rounded-full px-4 py-1 font-bold text-purple-900 relative">
              2015
            </span>
            <p className="w-[100px] font-bold">GeoLab-ის დაარსება</p>
          </div>
          <span className="block flex-1 h-[2px] bg-purple-500 mt-5 -mx-4 justc"></span>
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
            <p className="w-[100px] font-bold">ახალი პროგრამები</p>
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
            <p className="font-bold">საზოგადოების გაფართოება</p>
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
            <p className="font-bold">
              10+ წელი, მეტი შესაძლებლობები და კურსები
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}

      <div className="flex justify-center items-center  w-[940px] h-[400px]  mx-auto gap-6 bg-purple-300/40 rounded-2xl   ">
        <div>
          <h2 className="font-bold text-purple-600 text-[25px] flex pb-2   ">
            ჩვენი საქმიანობა
          </h2>
          <img
            className="w-[200px] rounded-4xl"
            src={webDesigne}
            alt="webDesigne"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="max-w-[450px] font-bold">
            ჩვენ ვქმნით შესაძლებლობებს ახალგაზრდებისთვის, რომლებსაც აინტერესებთ
            განათლება, პრაქტიკული პროექტები და ტექნოლოგიური საზოგადოება.
          </p>
          <div className="flex flex-row gap-4 ">
            <span className="bg-fuchsia-100 rounded-full w-[160px] flex items-center justify-center gap-2 py-2 font-bold">
              <GraduationCap className="text-purple-600" size={40} />
              კურსები
            </span>
            <span className="bg-orange-100 rounded-full w-[160px] flex items-center justify-center gap-2 py-2 font-bold">
              <CodeXml size={30} className="text-purple-600" />
              პროექტები
            </span>
            <span className="bg-green-100 rounded-full w-[160px] flex items-center justify-center gap-2 py-2 font-bold">
              <FaPeopleGroup size={30} className="text-green-500" />
              ივენთები
            </span>
          </div>
        </div>
      </div>
      {/* SECTION 5 */}
      <div className="w-[1440px]  bg-purple-300/40 mx-auto h-[150px] flex items-center rounded-4xl  justify-center gap-[50px]">
        <div className="flex   flex-col">
          <div className="flex justify-center items-center">
            <FaPeopleGroup size={45} className="text-purple-700 " />
          </div>
          <div className="flex items-center  justify-center items-center gap-2">
            <span className="font-bold text-black  text-[20px]"> 10+ წელი</span>
          </div>
          <span className="flex items-center justify-center font-bold">
            გამოცდილება
          </span>
        </div>
        <span className="border text-gray-500/40 h-[120px]  mt-4 "></span>
        <div>
          <div className="flex justify-center items-center">
            <GraduationCap className="text-purple-700" size={45} />
          </div>
          <div className="flex items-center  justify-center items-center gap-2">
            <span className="font-bold text-black text-[20px]">1000+</span>
          </div>
          <span className="flex items-center justify-center font-bold">
            სტუდენტი
          </span>
        </div>
        <span className="border text-gray-500/40 h-[120px]  mt-4 "></span>
        <div>
          <div className="flex justify-center items-center">
            <RocketIcon className="text-purple-700" size={40} />
          </div>
          <div className="flex items-center  justify-center items-center gap-2">
            <span className="font-bold text-blac text-[20px]"> 50+ </span>
          </div>
          <span className=" font-bold">პროექტი</span>
        </div>
      </div>
      {/* SECTION 6 */}
      <div className="w-[1440px]  mx-auto bg-purple-300/40 rounded-4xl px-4 py-3.5">
        <div className="flex items-center justify-between">
          <img src={watch} className="w-[90px]" alt="icon" />
          <div className="flex flex-col items-center justify-center  gap-4">
            <h2 className="font-bold text-[30px] text-purple-700">
              აღმოაჩინე ჩვენი კურსები
            </h2>
            <p className="font-bold">
              ისწავლე, პრაქტიკაში იმუშავე და შექმენი შენი პროექტი!
            </p>
          </div>
          <Link className="bg-purple-700 w-[150px] h-[45px]  flex items-center justify-center rounded-2xl text-white font-bold">
            კურსების ნახვა
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
