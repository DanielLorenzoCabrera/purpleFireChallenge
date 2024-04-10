import heartIcon from "@/assets/img/heart.svg";
import heartFilledIcon from "@/assets/img/heart_filled.svg";
import cartIcon from "@/assets/img/cart.svg";
import menuIcon from "@/assets/img/menu.svg";
import contactIcon from "@/assets/img/contact.svg";
import Image, { StaticImageData } from "next/image";

export interface LabelledOption {
  label: string;
  value: string;
}

export enum Icon {
  heart = heartIcon,
  heartFilled = heartFilledIcon,
  cart = cartIcon,
  menu = menuIcon,
  contact = contactIcon,
}

export interface Heading {
  title: string;
  subTitle?: string;
}

export type Product = {
  id: string;
  images: Array<StaticImageData>;
  brand: string;
  model: string;
  availability: string;
  name: string;
  features: Array<string>;
  types: Array<LabelledOption>;
  price: string;
  lastPrice: string;
  stars: number;
  description: string;
  specification: string;
  reviews: string;
};

export type Tag = {
  className: TagClass;
  label: string;
};

export enum TagClass {
  new = "new",
  discount = "discount",
  hot = "hot",
  info = "info",
}

export type RelatedProduct = {
  id: string;
  name: string;
  thumbnail: StaticImageData;
  price: string;
  lastPrice?: string;
  tag?: Tag;
  liked?: boolean;
};
