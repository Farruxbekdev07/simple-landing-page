export interface Product {
  id: number;
  title: string;
  image: string;
  rating: number;
  price: number | string;
  oldPrice: number | string;
  category: "Vegetable" | "Fruits";
}
