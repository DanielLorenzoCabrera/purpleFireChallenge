import ActionableIcon from "@/components/ActionableIcon";
import { Icon } from "@/assets/img/Icons";

const AddToCartButton = () => {
  return (
    <button className="cart-button">
      <ActionableIcon icon={Icon.cart} />
      <span>Add to cart</span>
    </button>
  );
};

export default AddToCartButton;
