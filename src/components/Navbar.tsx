import React from "react";

interface NavbarProps {
  children?: JSX.Element;
}

const Navbar = ({ children }: NavbarProps): JSX.Element => {
  return <nav>{children}</nav>;
};

export default Navbar;
