import heartIcon from "@/assets/img/heart.svg";
import cartIcon from "@/assets/img/cart.svg";


export interface DropdownOption {
  label: string;
  value: string;
}

export enum Icon {
  heart = heartIcon,
  cart = cartIcon,
}
