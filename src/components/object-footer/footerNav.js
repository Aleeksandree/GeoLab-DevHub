import { Mail, Phone, MapPin } from "lucide-react";

export const navBar = [
  {
    name: "მთავარი",
    path: "/",
    id: 1,
  },
  {
    name: "კურსები",
    path: "/cours",
    id: 2,
  },
  {
    name: "პროექტები",
    path: "/projects",
    id: 3,
  },
  {
    name: "ინფორმაცია",
    path: "/infos",
    id: 4,
  },
];
export const contacts = [
  { id: 1, text: "info@geolab.ge", icon: Mail },
  { id: 2, text: "+995 555 12 34 56", icon: Phone },
  { id: 3, text: "თბილისი, საქართველო", icon: MapPin },
];
