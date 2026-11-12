import { Headset, Laptop, Palette, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      image: Laptop,
      title: "ვებ განვითარება",
      descr: "თანამედროვე და სწრაფი ვებ აპლიკაციები",
      id: 1,
    },
    {
      image: Smartphone,
      title: "მობილური აპები",
      descr: "iOS და  Android აპლიკაციების შექმნა",
      id: 2,
    },
    {
      image: Palette,
      title: "UX/UI დიზაინი",
      descr: "გემოვნებაზე მორგებული დიზაინი",
      id: 3,
    },
    {
      image: Headset,
      title: "კონსულტაცია",
      descr: "იდეების განვითარება და ტექნოლოგიური მიმართულების შერჩევა",
      id: 4,
    },
  ];
  return (
    <div>
      <div className="flex gap-5 max-w-[1200px] mx-auto">
        {services.map((eachElement) => {
          const Icon = eachElement.image;

          return (
            <div
              className=" bg-white rounded-3xl p-5 flex flex-col items-center flex-1 min-w-0 gap-5 mx-auto shadow-md border border-purple-50 hover:-translate-y-2 transition-transform duration-300 "
              key={eachElement.id}
            >
              <div className="w-[55px] bg-purple-200 flex items-center justify-center rounded-2xl h-10 w-20">
                <Icon
                  size={30}
                  className="   pt-1   rounded-4xl  text-purple-700"
                />
              </div>
              <h3 className="font-bold text-[20px] text-black">
                {eachElement.title}
              </h3>
              <span className="text-sm text-gray-700 leading-6 max-w-[190px] text-center font-medium">
                {eachElement.descr}
              </span>
              <span className="border border-purple-800 w-[150px]  "></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
