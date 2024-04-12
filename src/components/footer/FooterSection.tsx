import React from "react";
import { useAppContext } from "@/components/AppWrapper";

interface FooterSectionProps {
  title: string;
  children?: JSX.Element;
}

const FooterSection = ({ title, children }: FooterSectionProps) => {
  const {isSmallScreen} = useAppContext()
  return (
    <section>
      <h6>{title}</h6>
      {!isSmallScreen && children}
    </section>
  );
};

export default FooterSection;
