import { CarType, LinkType, PieType, RecommendType } from "../../types";
import Icon from "../icons";
import Images from "../images";

const links: LinkType[] = [
  { title: "Dashboard", icon: Icon.dashboardIcon, path: "/" },
  { title: "Assests", icon: Icon.assetsIcon, path: "/assests" },
  { title: "Booking", icon: Icon.bookingIcon, path: "/booking" },
  { title: "Sell Cars", icon: Icon.sellCarIcon, path: "/sell-cars" },
  { title: "Buy Cars", icon: Icon.buyIcon, path: "/buy-cars" },
  { title: "Services", icon: Icon.servicesIcon, path: "/services" },
  { title: "Calender", icon: Icon.calenderIcon, path: "/calender" },
  { title: "Messages", icon: Icon.messageIcon, path: "/messages" },
];

const pieData: PieType[] = [
  { icon: Icon.fillThunderIcon, ratio: 45, title: "" },
  { icon: Icon.rangeIcon, ratio: 157, title: "Range" },
  { icon: Icon.breakFluidIcon, ratio: 9, title: "Breal fluid" },
  { icon: Icon.wheelIcon, ratio: 25, title: "Tire Wear" },
];

const recommendData: RecommendType[] = [
  {
    name: "Mini Cooper",
    image: Images.miniCooper,
    price: 132,
    ratio: 64,
    inHour: 32,
  },
  {
    name: "Porsche 911 Carrera",
    image: Images.porscheCarrera,
    price: 130,
    ratio: 74,
    inHour: 28,
  },
  {
    name: "Porsche 911 Carrera",
    image: Images.porscheCarrera2,
    price: 130,
    ratio: 74,
    inHour: 28,
  },
];

const carData: CarType[] = [
  {
    name: "Porshe 718 Cayman S",
    favorite: false,
    user: 5,
    price: 400,
    type: "Manual",
    image: Images.car1,
  },
  {
    name: "Porshe 718 Cayman S",
    favorite: true,
    user: 2,
    price: 300,
    type: "Auto",
    image: Images.car2,
  },

  {
    name: "Porshe 718 Cayman S",
    favorite: false,
    user: 2,
    price: 500,
    type: "Manual",
    image: Images.car3,
  },
  {
    name: "Porshe 718 Cayman S",
    favorite: false,
    user: 6,
    price: 250,
    type: "Manual",
    image: Images.porscheCarrera,
  },
  {
    name: "Porshe 718 Cayman S",
    favorite: false,
    user: 5,
    price: 400,
    type: "Manual",
    image: Images.porscheCarrera2,
  },
  {
    name: "Porshe 718 Cayman S",
    favorite: false,
    user: 5,
    price: 400,
    type: "Manual",
    image: Images.car1,
  },
  {
    name: "Porshe 718 Cayman S",
    favorite: true,
    user: 2,
    price: 300,
    type: "Auto",
    image: Images.car2,
  },

  {
    name: "Porshe 718 Cayman S",
    favorite: false,
    user: 2,
    price: 500,
    type: "Manual",
    image: Images.car3,
  },
  {
    name: "Porshe 718 Cayman S",
    favorite: false,
    user: 6,
    price: 250,
    type: "Manual",
    image: Images.porscheCarrera,
  },
  {
    name: "Porshe 718 Cayman S",
    favorite: false,
    user: 5,
    price: 400,
    type: "Manual",
    image: Images.porscheCarrera2,
  },
  {
    name: "Porshe 718 Cayman S",
    favorite: false,
    user: 5,
    price: 400,
    type: "Manual",
    image: Images.car1,
  },
  {
    name: "Porshe 718 Cayman S",
    favorite: false,
    user: 6,
    price: 250,
    type: "Manual",
    image: Images.porscheCarrera,
  },
];

export default { links, pieData, recommendData, carData };
