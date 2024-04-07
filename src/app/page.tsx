import Navbar from "@/components/Navbar";
import Dropdown from "@/components/Dropdown";

const langOtions = [
  {
    label: "ENG",
    value: "ENG",
  },
  {
    label: "SPA",
    value: "SPA",
  },
  {
    label: "FRE",
    value: "FRE",
  },
];

const currencyOptions = [
  {
    label: "USD",
    value: "USD",
  },
  {
    label: "EUR",
    value: "EUR",
  },
  {
    label: "GPB",
    value: "GPB",
  },
];

export default function DetailPage() {
  return (
    <main>
      <Navbar customClass="lang-currency">
        <>
          <span>Welcome to Needus & Get the best product</span>
          <section>
            <Dropdown options={langOtions} customClass="lang" />
            <Dropdown options={currencyOptions} customClass="currency" />
          </section>
        </>
      </Navbar>
    </main>
  );
}
