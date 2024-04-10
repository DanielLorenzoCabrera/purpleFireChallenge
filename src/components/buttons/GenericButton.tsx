import React from "react";

interface GenericButtonProps {
  value: string;
  onClick?: () => void;
  className?: string;
}

const GenericButton = ({ onClick, value, className }: GenericButtonProps) => {
  return (
    <button className={`primary-button ${className}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default GenericButton
