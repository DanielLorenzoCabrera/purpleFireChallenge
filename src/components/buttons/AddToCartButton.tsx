import ActionableIcon from "@/components/ActionableIcon";
import { Icon } from "@/types/CustomComponents";

const AddToCartButton = () => {
  return (
    <button className="cart-button">
      <ActionableIcon icon={Icon.cart} />
      <span>Add to cart</span>
    </button>
  );
};

export default AddToCartButton;
