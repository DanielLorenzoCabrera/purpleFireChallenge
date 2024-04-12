import Navbar from "@/components/Navbar";
import Dropdown from "@/components/Dropdown";
import Logo from "@/components/Logo";
import SearchInput from "@/components/SearchInput";
import { categories } from "@/static/LabelledOptions";
import { Theme } from "@/types/CustomTypes";
import Link from "next/link";
import ActionableIcon from "@/components/ActionableIcon";
import ShoppingCartIcon from "@/components/ShoppingCartIcon";
import { Icon } from "@/assets/img/Icons";
import { useAppContext } from "@/components/AppWrapper";

const SearchNavbar = () => {
  const {isSmallScreen} = useAppContext()

  return (
    <Navbar customClass="search">
      <>
        <Logo />
        <section className={isSmallScreen ? 'mobile' : ''}>
          {isSmallScreen ? <ActionableIcon icon={Icon.searchMobile}/> : <SearchInput placeholder="Search products" />}
        </section>
        <section className="auth">
          {!isSmallScreen && <Dropdown options={categories} theme={Theme.light} />}
          {isSmallScreen ? <ActionableIcon icon={Icon.user}/> : <div className="auth-links">
            <Link href={"/login"}>Login</Link>
            <Link href={"/login"}>Signup</Link>
          </div>}
        </section>
        <div className="actionable-icons">
          <ActionableIcon icon={Icon.heart} />
          <ShoppingCartIcon numberOfProducts={6}/>
        </div>
      </>
    </Navbar>
  );
};

export default SearchNavbar;
