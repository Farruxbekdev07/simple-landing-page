import Corn from "../assets/corn.png";
import Tomato from "../assets/tomato.png";
import Almonds from "../assets/almonds.png";
import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    rating: 3,
    price: "9.37",
    image: Tomato,
    oldPrice: "14.00",
    category: "Vegetable",
    title: "Vegan Red Tomato",
  },
  {
    id: 2,
    rating: 4,
    price: "18.00",
    image: Almonds,
    oldPrice: "21.00",
    category: "Fruits",
    title: "Organic Almonds",
  },
  {
    id: 3,
    rating: 5,
    image: Corn,
    price: "18.00",
    oldPrice: "21.23",
    title: "Fresh Corn",
    category: "Vegetable",
  },
  {
    id: 4,
    rating: 4,
    price: "18.00",
    image: Almonds,
    oldPrice: "21.00",
    category: "Fruits",
    title: "Organic Almonds",
  },
];
