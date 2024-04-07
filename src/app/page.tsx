import LangAndCurrencyNavBar from "@/components/LangAndCurrencyNavbar";
import SearchNavbar from "@/components/SearchNavbar";
import MenuNavbar from "@/components/MenuNavbar";
import ViewWrapper from "@/components/ViewWrapper";
import { TVCollectionHeading } from "@/static/headings";

export default function DetailPage() {
  return (
    <main>
      <LangAndCurrencyNavBar />
      <SearchNavbar/>
      <MenuNavbar/>
      <ViewWrapper heading={TVCollectionHeading}>
        <div>content</div>
      </ViewWrapper>
    </main>
  );
}
