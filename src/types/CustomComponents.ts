import heartIcon from "@/assets/img/heart.svg";
import cartIcon from "@/assets/img/cart.svg";
import menuIcon from "@/assets/img/menu.svg";
import contactIcon from "@/assets/img/contact.svg";


export interface DropdownOption {
  label: string;
  value: string;
}

export enum Icon {
  heart = heartIcon,
  cart = cartIcon,
  menu = menuIcon,
  contact = contactIcon,
}


export interface Heading {
  title: string;
  subTitle?: string;
}