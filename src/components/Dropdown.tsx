
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { LabelledOption } from "@/types/CustomComponents";
import DropdownIcon from "./DropdownIcon";
import { Theme } from "@/types/CustomTypes";
interface DropdownProps {
  options: Array<LabelledOption>;
  defaultValue?: string;
  theme?: Theme;
  customClass?: string;
}

const Dropdown = ({
  options,
  defaultValue,
  theme = Theme.dark,
  customClass
}: DropdownProps): JSX.Element => {
  const [valueSelected, setValueSelected] = useState(
    defaultValue || options[0].value
  );

  const optionSelectedChange = (event: SelectChangeEvent) => {
    setValueSelected(event.target.value as string);
  };
  return (
    <Select
      value={valueSelected}
      onChange={optionSelectedChange}
      classes={{ root: `dropdown ${theme} ${customClass}` }}
      IconComponent={DropdownIcon}
    >
      {options.map(({ label, value }: LabelledOption) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};

Dropdown.muiSkipListHighlight = true;

export default Dropdown;
