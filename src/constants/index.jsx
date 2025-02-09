import cappuccino from "../assets/menu-pictures/cappuccino.jpg";
import chaiLatte from "../assets/menu-pictures/chaiLatte.jpg";
import expresso from "../assets/menu-pictures/expresso.jpg";
import macchiato from "../assets/menu-pictures/macchiato.jpg";
import badge from "../assets/icons/badge.png";
import beans from "../assets/icons/beans.png";
import bestPrice from "../assets/icons/best-price.png";
import coffeeCup from "../assets/icons/coffee-cup.png";
import customer1 from "../assets/profile-pictures/c1.jpg";
import customer2 from "../assets/profile-pictures/c2.jpg";
import customer3 from "../assets/profile-pictures/c3.jpg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import x from "../assets/icons/x.svg";
export const navItems = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];
export const menuItems = [
  {
    title: "Cappuccino",
    price: 8.5,
    image: cappuccino,
    description: "Coffee 50% | Milk 50%",
  },
  {
    title: "Chai Latte",
    price: 8.5,
    image: chaiLatte,
    description: "Coffee 50% | Milk 50%",
  },
  {
    title: "Macchiato",
    price: 8.5,
    image: macchiato,
    description: "Coffee 50% | Milk 50%",
  },
  {
    title: "Expresso",
    price: 8.5,
    image: expresso,
    description: "Coffee 50% | Milk 50%",
  },
];

export const featureItems = [
  {
    title: "Supreme Beans",
    image: badge,
    description: "Beans that provides great taste",
  },
  {
    title: "High Quality",
    image: beans,
    description: "We provide the highest quality",
  },
  {
    title: "Extraordinary",
    image: bestPrice,
    description: "Coffee like you have never tasted",
  },
  {
    title: "Affordable Price",
    image: coffeeCup,
    description: "Our Coffee prices are easy to afford",
  },
];

export const TestimonialItems = [
  {
    name: "Supreme Beans",
    image: customer1,
    job: "Project Manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
  },
  {
    name: "High Quality",
    image: customer2,
    job: "Project Manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
  },
  {
    name: "Extraordinary",
    image: customer3,
    job: "Project Manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
  },
];
export const socialLinks = [
  { href: "#", icon: facebook, title: "facebook" },
  { href: "#", icon: instagram, title: "instagram" },
  { href: "#", icon: youtube, title: "youtube" },
  { href: "#", icon: x, title: "x" },
];
export const footerLinks = [
  {
    title: "About",
    links: [
      { text: "Menu", href: "#" },
      { text: "Features", href: "#" },
      { text: "News & Blogs", href: "#" },
      { text: "Help & Supports", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "How we work", href: "#" },
      { text: "Terms of service", href: "#" },
      { text: "Pricing", href: "#" },
      { text: "FAQ", href: "#" },
    ],
  },
  {
    title: "ContactUs",
    links: [
      {
        text: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
        href: "#",
      },
      { text: "+1 202-918-2132", href: "#" },
      { text: "beanscene@mail.com", href: "#" },
      { text: "www.beanscene.com", href: "#" },
    ],
  },
];
