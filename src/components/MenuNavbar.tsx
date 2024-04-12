import Navbar from "@/components/Navbar";
import Dropdown from "@/components/Dropdown";
import * as LabelledOptions from "@/static/LabelledOptions";
import ActionableIcon from "@/components/ActionableIcon";
import { Icon } from "@/assets/img/Icons";
import { useAppContext } from "@/components/AppWrapper";

const MenuNavbar = () => {
  const { isSmallScreen } = useAppContext();
  return (
    <Navbar customClass="menu-navbar">
      <>
        <section className="categories-wrapper">
          <ActionableIcon icon={Icon.menu} />
          {!isSmallScreen && <Dropdown options={LabelledOptions.categories} />}
        </section>
        {!isSmallScreen && (
          <>
            <section className="sections">
              <Dropdown options={LabelledOptions.homeOptions} />
              <Dropdown options={LabelledOptions.aboutOptions} />
              <Dropdown options={LabelledOptions.productOptions} />
              <Dropdown options={LabelledOptions.pagesOptions} />
              <Dropdown options={LabelledOptions.contactOptions} />
            </section>
            <section className="contact">
              <ActionableIcon
                icon={Icon.contact}
                iconProps={{ width: 30, height: 30, alt: "Contact icon" }}
              />
              {!isSmallScreen && (
                <div>
                  <span>Contact Us 24/7</span>
                  <span>+12012987481</span>
                </div>
              )}
            </section>
          </>
        )}
      </>
    </Navbar>
  );
};

export default MenuNavbar;
