import Tab from "@/components/TabBar";
import { LabelledOption } from "@/types/CustomComponents";
import { useEffect, useState } from "react";
import { useAppContext } from "@/components/AppWrapper";

interface ProductDetailedInformationProps {
  description: string;
  specification: string;
  reviews: string;
}

const tabOptions: Array<LabelledOption> = [
  { label: "description", value: "description" },
  { label: "specification", value: "specification" },
  { label: "reviews", value: "reviews" },
];

const ProductDetailedInformation = ({
  description,
  specification,
  reviews,
}: ProductDetailedInformationProps) => {
  const {isSmallScreen} = useAppContext()


  useEffect(() => {
    console.log('message from detailed', isSmallScreen)
  }, [isSmallScreen])

  const [tabSelected, setTabSelected] = useState<string>("description");
  const isTabSelected = (value: string) =>
    value === tabSelected ? "selected" : "";
  return (
    <div className="detailed-information">
      <Tab
        options={tabOptions}
        tabSelected={tabSelected}
        onTabChange={(newTabSelected) => setTabSelected(newTabSelected)}
      />

      {tabSelected === "description" && (
        <p className={isTabSelected("description")}>{description}</p>
      )}
      {tabSelected === "specification" && (
        <p className={isTabSelected("specification")}>{specification}</p>
      )}
      {tabSelected === "reviews" && (
        <p className={isTabSelected("reviews")}>{reviews}</p>
      )}
    </div>
  );
};

export default ProductDetailedInformation;
