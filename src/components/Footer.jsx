import { Link } from "react-router-dom";
import GeoLab from "../assets/geolab.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  const navBar = [
    {
      name: "მთავარი",
      path: "/",
      id: 1,
    },
    {
      name: "კურსები",
      path: "/Cours",
      id: 2,
    },
    {
      name: "პროექტები",
      path: "/Projects",
      id: 3,
    },
    {
      name: "ინფორმაცია",
      path: "/Info",
      id: 4,
    },
  ];
  const contacts = [
    { id: 1, text: "info@geolab.ge", icon: Mail },
    { id: 2, text: "+995 555 12 34 56", icon: Phone },
    { id: 3, text: "თბილისი, საქართველო", icon: MapPin },
  ];
  return (
    <div className="w-full bg-purple-900  mt-17  ">
      <div className="max-w-[1440px] mx-auto flex gap-5 px-2 pt-5 ">
        <div className=" flex-1  flex flex-col items-center gap-2.5">
          <div className="flex items-center  gap-2  ">
            <img
              className="w-[35px] rounded-2xl "
              src={GeoLab}
              alt="Logo-icon"
            />
            <h2 className="font-bold text-fuchsia-300 text-2xl">GeoLab</h2>
          </div>
          <span className="text-white font-semibold  text-center flex flex-col gap-1 ">
            ისწავლე, შექმენი და განვითარდი
            <span>შენი იდეები იწყება აქ!</span>
          </span>
        </div>
        <span className="border border-gray-400"></span>
        <div className=" flex-1 flex flex-col  items-center gap-0.5  ">
          <h2 className="text-black font-bold text-[18px] ">სწრაფი ბმულები</h2>
          {navBar.map((eachElement) => (
            <div className="mt-[2px]" key={eachElement.id}>
              <Link
                className="text-white font-extrabold  "
                to={eachElement.path}
              >
                {eachElement.name}
              </Link>
            </div>
          ))}
        </div>
        <span className="border border-gray-400"></span>
        <div className=" flex-1  flex flex-col items-center   ">
          <div className=" flex flex-col items-center justify-center gap-1">
            <h2 className="text-black font-bold text-[18px] ">კონტაკტი</h2>
            {contacts.map((eachInfo) => {
              const Icon = eachInfo.icon;
              return (
                <div
                  className="flex-1 flex flex-col justify-center gap-3 "
                  key={eachInfo.id}
                >
                  <div className="flex items-center gap-3" key={eachInfo.id}>
                    <Icon size={20} className=" text-black shrink-0 w-5" />
                    <h2 className="text-white ">{eachInfo.text}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <span className="border border-gray-400"></span>
        <div className=" flex-1  ">
          <div className="flex  justify-center pt-2.5 flex-col items-center ">
            <h2 className="text-black font-bold text-[18px] mt-1">
              გამოგვყევი
            </h2>
            <div className="flex gap-4 mt-4 text-purple-300">
              <Link
                to={
                  "https://www.facebook.com/share/1F2ZahFkwf/?mibextid=wwXIfr"
                }
                className="bg-purple-700 p-3 rounded-4xl"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                className="bg-purple-700 p-3 rounded-4xl"
                to={
                  "https://www.instagram.com/geolabcommunity?xtok=MWx0empkcGtmeTdmZg=="
                }
              >
                <BsInstagram size={20} />
              </Link>

              <Link
                to={"https://www.youtube.com/@lsGeolab"}
                className="bg-purple-700 p-3 rounded-4xl"
              >
                <BsYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-5 pb-8">
        <span className="block w-full border-t border-gray-400"></span>
      </div>
    </div>
  );
};

export default Footer;
