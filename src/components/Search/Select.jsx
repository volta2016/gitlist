import React from "react";
import { SelectList, Selector } from "./styles";

const Select = () => {
  return (
    <SelectList>
      <Selector name="" id="select-option">
        <option value="1">1</option>
      </Selector>
      <Selector name="" id="select-option">
        <option value="2">2</option>
      </Selector>
      <Selector name="" id="select-option">
        <option value="3">3</option>
      </Selector>
    </SelectList>
  );
};

export default Select;
