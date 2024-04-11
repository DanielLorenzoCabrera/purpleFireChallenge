import React from "react";

interface FooterSectionProps {
  title: string;
  children?: JSX.Element;
}

const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <section>
      <h6>{title}</h6>
      {children}
    </section>
  );
};

export default FooterSection;
