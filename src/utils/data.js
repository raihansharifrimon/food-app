import C3 from "../assets/images/c3.png";
import F1 from "../assets/images/f1.png";
import FI1 from "../assets/images/fi1.png";
import I1 from "../assets/images/i1.png";


export const heroData = [
    { id: 1, 
      name: "Icecream", 
      decp: "Chocolate", 
      price: "5.25", 
      image: I1 
    },
    {
      id: 2,
      name: "Strawberries",
      decp: "Fresh Strawberries",
      price: "10.25",
      image: F1,
    },
    {
      id: 3,
      name: "Chicken Kebab",
      decp: "Mixed Kebab Plate",
      price: "5.265",
      image: C3,
    },
    {
      id: 4,
      name: "Fish Kebab",
      decp: "Mixed Fish Kebab",
      price: "7.25",
      image: FI1,
    },
]

export const websiteMenus = [
    {
        id: 1,
        label: "Home",
        route: '/'
    },
    {
        id: 2,
        label: "Menu",
        route: '/menu'
    },
    {
        id: 3,
        label: "About Us",
        route: '/about-us'
    },
    {
        id: 4,
        label: "Service",
        route: '/service'
    },
]

