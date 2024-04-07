import React from "react";

interface NavbarProps {
  children?: JSX.Element;
  customClass?: string;
}

const Navbar = ({ children, customClass }: NavbarProps): JSX.Element => {
  return <nav className={customClass}>{children}</nav>;
};

export default Navbar;
