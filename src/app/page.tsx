"use client";
import LangAndCurrencyNavBar from "@/components/LangAndCurrencyNavbar";
import SearchNavbar from "@/components/SearchNavbar";
import MenuNavbar from "@/components/MenuNavbar";
import ViewWrapper from "@/components/ViewWrapper";
import { TVCollectionHeading } from "@/static/headings";
import { TV_LG, relatedProducts } from "@/static/dummyData";
import ProductDetail from "@/components/ProductDetail";
import RelatedProductDisplayer from "@/components/RelatedProductsDisplayer";
import NewsletterSubscription from "@/components/newsletter/NewsletterSubscription";
import AppWrapper from "@/components/AppWrapper";
import { useAppContext } from "@/components/AppWrapper";
import { useEffect } from "react";

const DetailPage = () => {
  const { isSmallScreen } = useAppContext();

  useEffect(() => {
    console.log("eeee", isSmallScreen);
  }, [isSmallScreen]);

  return (
    <>
      <header>
        {!isSmallScreen && <LangAndCurrencyNavBar />}
        <SearchNavbar />
        <MenuNavbar />
      </header>
      <ViewWrapper heading={TVCollectionHeading}>
        <>
          <ProductDetail product={TV_LG} />
          <RelatedProductDisplayer relatedProducts={relatedProducts} />
          <NewsletterSubscription />
        </>
      </ViewWrapper>
    </>
  );
};

export default DetailPage;
