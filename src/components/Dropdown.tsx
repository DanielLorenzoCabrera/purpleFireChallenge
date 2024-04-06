"use client";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DropdownOption } from "@/types/CustomComponents";

interface DropdownProps {
  options: Array<DropdownOption>;
  defaultValue?: string;
}

const Dropdown = ({ options, defaultValue }: DropdownProps): JSX.Element => {
  const [valueSelected, setValueSelected] = useState(
    defaultValue || options[0].value
  );

  const optionSelectedChange = (event: SelectChangeEvent) => {
    setValueSelected(event.target.value as string);
  };
  return (
    <Select value={valueSelected} onChange={optionSelectedChange}>
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
