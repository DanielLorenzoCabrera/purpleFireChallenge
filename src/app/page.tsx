import LangAndCurrencyNavBar from "@/components/LangAndCurrencyNavbar";
import SearchNavbar from "@/components/SearchNavbar";
import MenuNavbar from "@/components/MenuNavbar";
import ViewWrapper from "@/components/ViewWrapper";
import { TVCollectionHeading } from "@/static/headings";
import { TV_LG } from "@/static/dummyData";
import ProductDetail from "@/components/ProductDetail";


export default function DetailPage() {
  return (
    <main>
      <LangAndCurrencyNavBar />
      <SearchNavbar/>
      <MenuNavbar/>
      <ViewWrapper heading={TVCollectionHeading}>
        <ProductDetail product={TV_LG}/>
      </ViewWrapper>
    </main>
  );
}
