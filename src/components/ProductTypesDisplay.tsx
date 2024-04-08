import { useState } from "react";
import { LabelledOption } from "@/types/CustomComponents";

interface ProductTypesDisplayProps {
  types: Array<LabelledOption>;
}

const ProductTypesDisplay = ({ types }: ProductTypesDisplayProps) => {
  const [typeSelected, setTypeSelected] = useState(types[0].value);
  const isSelected = (value: string) =>
    value === typeSelected ? "selected" : "";
  return (
    <div className="product-types">
      {types.map((type) => (
        <span
          className={isSelected(type.value)}
          key={type.value}
          onClick={() => setTypeSelected(type.value)}
        >
          {type.label}
        </span>
      ))}
    </div>
  );
};


export default ProductTypesDisplay