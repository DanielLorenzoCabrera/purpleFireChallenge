import Navbar from "@/components/Navbar";
import Dropdown from "@/components/Dropdown";
import Logo from "@/components/Logo";

const SearchNavbar = () => {
  return (
    <Navbar customClass="search">
      <>
        <Logo />
        <section>
          {/* <Dropdown options={langOptions} customClass="lang" />
          <Dropdown options={currencyOptions} customClass="currency" /> */}
        </section>
      </>
    </Navbar>
  );
};

export default SearchNavbar;
