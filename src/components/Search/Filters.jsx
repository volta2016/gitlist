import React from "react";
import { FilterStyled, SearchInput } from "./styles";
import Select from "./Select";

const Filters = () => {
  return (
    <FilterStyled>
      <SearchInput placeholder="Find a Repository" />
      <Select></Select>
    </FilterStyled>
  );
};

export default Filters;
