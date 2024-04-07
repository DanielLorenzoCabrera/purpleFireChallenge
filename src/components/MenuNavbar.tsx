import Navbar from "@/components/Navbar";
import Dropdown from "@/components/Dropdown";
import * as DropdownOptions from "@/static/dropdownOptions";
import ActionableIcon from "@/components/ActionableIcon";
import { Icon } from "@/types/CustomComponents";

const MenuNavbar = () => {
  return (
    <Navbar customClass="menu-navbar">
      <>
        <section className="categories-wrapper">
          <ActionableIcon icon={Icon.menu} />
          <Dropdown options={DropdownOptions.categories} />
        </section>
        <section className="sections">
          <Dropdown options={DropdownOptions.homeOptions} />
          <Dropdown options={DropdownOptions.aboutOptions} />
          <Dropdown options={DropdownOptions.productOptions} />
          <Dropdown options={DropdownOptions.pagesOptions} />
          <Dropdown options={DropdownOptions.contactOptions} />
        </section>
        <section className="contact">
            <ActionableIcon icon={Icon.contact} iconProps={{width: 30, height: 30, alt: 'Contact icon'}}/>
            <div>
                <span>Contact Us 24/7</span>
                <span>+12012987481</span>
            </div>
        </section>
      </>
    </Navbar>
  );
};

export default MenuNavbar;
