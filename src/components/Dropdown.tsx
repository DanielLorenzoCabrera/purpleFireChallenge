"use client";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DropdownOption } from "@/types/CustomComponents";
import DropdownIcon from "./DropdownIcon";
import { Theme } from "@/types/CustomTypes";
interface DropdownProps {
  options: Array<DropdownOption>;
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
      {options.map(({ label, value }: DropdownOption) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};

Dropdown.muiSkipListHighlight = true;

export default Dropdown;
