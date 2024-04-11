import React from "react";
import FooterSection from "@/components/footer/FooterSection";
import ActionableIcon from "@/components/ActionableIcon";
import { Icon } from "@/assets/img/Icons";

const Footer = () => {
  return (
    <footer>
      <FooterSection title="about us">
        <>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
            laoreet.
          </span>
          <figure className="social-media">
            <ActionableIcon icon={Icon.facebook} />
            <ActionableIcon icon={Icon.whatsapp} />
            <ActionableIcon icon={Icon.instagram} />
            <ActionableIcon icon={Icon.youtube} />
          </figure>
        </>
      </FooterSection>
      <FooterSection title="information">
        <ul>
          <li>About</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li>Sales</li>
          <li>Terms & Conditions</li>
          <li>EMI Payment</li>
        </ul>
      </FooterSection>
      <FooterSection title="account">
        <ul>
          <li>My Account</li>
          <li>My Orders</li>
          <li>Returns</li>
          <li>Shipping</li>
          <li>Wishlist</li>
          <li>Account Details</li>
        </ul>
      </FooterSection>
      <FooterSection title="store">
        <ul>
          <li>Affiliate</li>
          <li>Discounts</li>
          <li>Sale</li>
          <li>Contact</li>
          <li>All Collections</li>
        </ul>
      </FooterSection>
      <FooterSection title="contact us">
        <>
          <span>
            If you have any query, please contact us{" "}
            <strong>needus24@gmail.com</strong>
          </span>
          <div className="labelled-icon">
            <ActionableIcon icon={Icon.location} />
            <span>California, USA</span>
          </div>
          <div className="labelled-icon">
            <ActionableIcon icon={Icon.mobile} />
            <span> +12012987481</span>
          </div>
        </>
      </FooterSection>
      <div className="divider">
      <hr />
      </div>
      <section className="rights">
        <span>Copyright. 2023 All Right Reserved</span>
      </section>
    </footer>
  );
};

export default Footer;
