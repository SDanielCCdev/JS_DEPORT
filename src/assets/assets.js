import js_cf from "./js_cf.svg";
import js_sf from "./js_sf.svg";
import search from "./search.svg";
import user from "./user.svg";
import Cart from "./Cart.svg";
import menu from "./menu.svg";
import back from "./back.svg";
import hero from "./hero.avif";
import icon from "./icon.svg";
import check from "./check.png";
import support from "./support.svg";
import next from "./next.svg";
import cross from "./cross.svg";
import start from "./start.png";
import start1 from "./start1.png";
import bin from "./bin.svg";
import stripe from "./stripe.png";
import razorpay from "./razorpay.png";
import about from "./about.jpg";
import contact from "./contact.jpg";
import BUBBLECOMFY from "./BUBBLECOMFY.avif";
import disney_niña from "./disney_niña.avif";
import rulfalcon_niño from "./rulfalcon_niño.avif";

import response_black from "./response_black.avif";
import outdoor_mujer from "./outdoor_mujer.avif";
import response_blue from "./response_blue.avif";
import superstar_mujer from "./superstar_mujer.avif";
import forum_mujer from "./forum_mujer.avif";

import superstar_black from "./superstar_black.avif";
import galaxy_gray from "./galaxy_gray.avif";
import galaxy from "./galaxy.avif";
import outdoor_hombre from "./outdoor_hombre.avif";
import forum_hombre from "./forum_hombre.avif";

import tensaur_black from "./tensaur_black.avif";
import tensaur_white from "./tensaur_white.avif";
import tensaur_pink from "./tensaur_pink.avif";
import tensaur1 from "./tensaur1.png";
import tensaur2 from "./tensaur2.png";
import tensaur3 from "./tensaur3.png";

export const assets = {
  js_cf,
  js_sf,
  response_black,
  response_blue,
  superstar_mujer,
  outdoor_mujer,
  forum_mujer,
  superstar_black,
  galaxy_gray,
  galaxy,
  outdoor_hombre,
  forum_hombre,
  tensaur_white,
  BUBBLECOMFY,
  disney_niña,
  rulfalcon_niño,
  tensaur_black,
  tensaur1,
  tensaur2,
  tensaur3,
  search,
  user,
  Cart,
  menu,
  back,
  hero,
  icon,
  check,
  support,
  next,
  cross,
  start,
  start1,
  bin,
  stripe,
  razorpay,
  about,
  contact,
};

export const products = [
  {
    _id: "js01",
    name: "Response Black",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Women",
    subCategory: "Running",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    image: [response_black],
    price: 190,
    bestseller: false,
  },
  {
    _id: "js011",
    name: "Response Blue",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Women",
    subCategory: "Running",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    image: [response_blue],
    price: 180,
    bestseller: false,
  },
  {
    _id: "js0111",
    name: "Superstart White",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Women",
    subCategory: "Urban",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    image: [superstar_mujer],
    price: 330,
    bestseller: false,
  },
  {
    _id: "js01111",
    name: "Terrex Gore tex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Women",
    subCategory: "Trekking",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    image: [outdoor_mujer],
    price: 450,
    bestseller: true,
  },
  {
    _id: "js011111",
    name: "Forum White",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Women",
    subCategory: "Urban",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    image: [forum_mujer],
    price: 450,
    bestseller: false,
  },

  {
    _id: "js02",
    name: "Tensaur Black",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Kids",
    subCategory: "Urban",
    sizes: ["1K", "2K", "3K", "4K", "5K"],
    image: [tensaur_black, tensaur1, tensaur2, tensaur3],
    price: 100,
    bestseller: true,
  },
  {
    _id: "js022",
    name: "Tensaur Pink",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Kids",
    subCategory: "Urban",
    sizes: ["1K", "2K", "3K", "4K", "5K"],
    image: [tensaur_pink],
    price: 100,
    bestseller: true,
  },
  {
    _id: "js0222",
    name: "Rulfalcon Black",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Kids",
    subCategory: "Running",
    sizes: ["1K", "2K", "3K", "4K", "5K"],
    image: [rulfalcon_niño],
    price: 120,
    bestseller: false,
  },
  {
    _id: "js02222",
    name: "X_PLRPATH Disney",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Kids",
    subCategory: "Running",
    sizes: ["1K", "2K", "3K", "4K", "5K"],
    image: [disney_niña],
    price: 150,
    bestseller: true,
  },
  {
    _id: "js022222",
    name: "BUBBLECOMFY",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Kids",
    subCategory: "Urban",
    sizes: ["1K", "2K", "3K", "4K", "5K"],
    image: [BUBBLECOMFY],
    price: 80,
    bestseller: false,
  },

  {
    _id: "js03",
    name: "Superstart black",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Men",
    subCategory: "Urban",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    image: [superstar_black],
    price: 280,
    bestseller: false,
  },
  {
    _id: "js033",
    name: "Super Gore Tex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Men",
    subCategory: "Trekking",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    image: [outdoor_hombre],
    price: 380,
    bestseller: false,
  },
  {
    _id: "js0333",
    name: "Galaxy 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Men",
    subCategory: "Running",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    image: [galaxy],
    price: 200,
    bestseller: true,
  },
  {
    _id: "js03333",
    name: "Galaxy 7 Gray",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Men",
    subCategory: "Running",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    image: [galaxy_gray],
    price: 200,
    bestseller: false,
  },
  {
    _id: "js033333",
    name: "Forum White",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam?",
    category: "Men",
    subCategory: "Urban",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10],
    image: [forum_hombre],
    price: 420,
    bestseller: false,
  },
];
