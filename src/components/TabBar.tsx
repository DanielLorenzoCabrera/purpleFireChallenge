import React from "react";
import { LabelledOption } from "@/types/CustomComponents";

interface TabProps {
  options: Array<LabelledOption>;
  tabSelected: string;
  onTabChange: (optionValue: string) => void;
}

const Tab = ({
  options,
  onTabChange,
  tabSelected = options[0]?.value,
}: TabProps) => {
  const isTabSelected = (tabValue: string) => tabSelected === tabValue;

  return (
    <div className="tabs">
      {options.map((option: LabelledOption) => {
        return (
          <input
            className={isTabSelected(option.value) ? "selected" : ""}
            type="button"
            key={option.value}
            value={option.label}
            onClick={() => onTabChange(option.value)}
          />
        );
      })}
    </div>
  );
};

export default Tab;

