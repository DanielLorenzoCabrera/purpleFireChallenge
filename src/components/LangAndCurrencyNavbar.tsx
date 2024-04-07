import Navbar from "@/components/Navbar";
import Dropdown from "@/components/Dropdown";
import { currencyOptions, langOptions } from "@/static/dropdownOptions";

const LangAndCurrencyNavBar = () => {
  return (
    <Navbar customClass="lang-currency">
      <>
        <span>Welcome to Needus & Get the best product</span>
        <section>
          <Dropdown options={langOptions} customClass="lang" />
          <Dropdown options={currencyOptions} customClass="currency" />
        </section>
      </>
    </Navbar>
  );
};

export default LangAndCurrencyNavBar;
