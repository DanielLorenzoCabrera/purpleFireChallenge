import LangAndCurrencyNavBar from "@/components/LangAndCurrencyNavbar";
import SearchNavbar from "@/components/SearchNavbar";
import MenuNavbar from "@/components/MenuNavbar";
import ViewWrapper from "@/components/ViewWrapper";
import { TVCollectionHeading } from "@/static/headings";
import { TV_LG, relatedProducts } from "@/static/dummyData";
import ProductDetail from "@/components/ProductDetail";
import RelatedProductDisplayer from "@/components/RelatedProductsDisplayer";



export default function DetailPage() {
  return (
    <main>
      <LangAndCurrencyNavBar />
      <SearchNavbar/>
      <MenuNavbar/>
      <ViewWrapper heading={TVCollectionHeading}>
        <ProductDetail product={TV_LG}/>
      </ViewWrapper>
      <RelatedProductDisplayer relatedProducts={relatedProducts}/>
    </main>
  );
}
