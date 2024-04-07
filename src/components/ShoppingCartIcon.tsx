import ActionableIcon from "@/components/ActionableIcon";
import { Icon } from "@/types/CustomComponents";

interface ShoppingCartIconProps {
  numberOfProducts?: number;
}

const ShoppingCartIcon = ({ numberOfProducts }: ShoppingCartIconProps) => {
  const thereAreProducts = numberOfProducts && numberOfProducts > 0;
  return (
    <div className="shopping-cart">
      {thereAreProducts && <span>{numberOfProducts}</span>}
      <ActionableIcon icon={Icon.cart} />
    </div>
  );
};

export default ShoppingCartIcon;
