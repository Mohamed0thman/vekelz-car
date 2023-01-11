import { CarType, LinkType, PieType, RecommendType } from "../../types";
import Icon from "../icons";
import Images from "../images";

const links: LinkType[] = [
  { title: "Dashboard", Icon: Icon.DashboardIcon, path: "/" },
  { title: "Assests", Icon: Icon.AssetsIcon, path: "/assests" },
  { title: "Booking", Icon: Icon.BookingIcon, path: "/booking" },
  { title: "Sell Cars", Icon: Icon.SellCarIcon, path: "/sell-cars" },
  { title: "Buy Cars", Icon: Icon.BuyIcon, path: "/buy-cars" },
  { title: "Services", Icon: Icon.ServicesIcon, path: "/services" },
  { title: "Calender", Icon: Icon.CalenderIcon, path: "/calender" },
  { title: "Messages", Icon: Icon.MessageIcon, path: "/messages" },
];

const pieData: PieType[] = [
  { Icon: Icon.ThunderIcon, ratio: 45, title: "Energy" },
  { Icon: Icon.RangeIcon, ratio: 157, title: "Range" },
  { Icon: Icon.BreakFluidIcon, ratio: 9, title: "Breal fluid" },
  { Icon: Icon.WheelIcon, ratio: 25, title: "Tire Wear" },
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
