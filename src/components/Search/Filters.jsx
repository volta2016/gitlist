import React from "react";
import { FilterStyled, SearchInput, SelectList } from "./styles";

const Filters = () => {
  return (
    <FilterStyled>
      <SearchInput placeholder="Find a Repository" />
      <SelectList>
        <select name="" id="select">
          <option value=""></option>
        </select>
        <select name="" id="select">
          <option value=""></option>
        </select>
        <select name="" id="select">
          <option value=""></option>
        </select>
      </SelectList>
    </FilterStyled>
  );
};

export default Filters;
