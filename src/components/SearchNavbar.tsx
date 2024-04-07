import Navbar from "@/components/Navbar";
import Dropdown from "@/components/Dropdown";
import Logo from "@/components/Logo";
import SearchInput from "@/components/SearchInput";
import { categories } from "@/static/dropdownOptions";
import { Theme } from "@/types/CustomTypes";
import Link from "next/link";

const SearchNavbar = () => {
  return (
    <Navbar customClass="search">
      <>
        <Logo />
        <section>
          <SearchInput placeholder="Search products" />
        </section>
        <section>
          <Dropdown options={categories} theme={Theme.light} />
          <div className="auth-links">
            <Link href={"/login"}>Login</Link>
            <Link href={"/login"}>Signup</Link>
          </div>
        </section>
      </>
    </Navbar>
  );
};

export default SearchNavbar;
