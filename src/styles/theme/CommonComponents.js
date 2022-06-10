import styled from "styled-components";

export const LayoutWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1rem;
  }
`;

export const Container = styled.main`
  max-width: 1280px;
  margin: 0px auto;
  padding: 0px 1rem;
`;
