import styled from "styled-components";

export const FilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border: 1px solid ${({ theme }) => theme.color.border};
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  line-height: 1.5rem;
  border-radius: 4px;
  font-size: 0.825rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.textMain};
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.color.link};
  }
`;

export const SelectList = styled.div`
  display: flex;
  gap: 0.5rem;
`;
