import { createGlobalStyle, DefaultTheme } from "styled-components";

export const dark: DefaultTheme = {
  color: {
    bg: "#0d1117",
    link: "#57a6ff",
    textRepoAndBorder: "#8B949E", //grey
    textRepoTwoAndBorder: "#c5ced7", //grey2
    textHeader: "#c9d1d9",
    white: "#c9d1d9",
    button: "#22262C",
    header: "hsl(215deg 21% 11%)",
    badge: "#15223A",
  },
};

export const light = {
  color: {
    bg: "#0d1117",
    link: "#57a6ff",
    textRepoAndBorder: "#8B949E",
    textRepoTwoAndBorder: "#c5ced7", //grey2
    textHeader: "#c9d1d9",
    white: "#FFFFFE",
    button: "#22262C",
    header: "hsl(213deg 13% 16%",
    badge: "hsl(215deg 98% 61% / 15%)", //tags technology
  },
};

export const GlobalStyle = createGlobalStyle`


  * {
    font-family: 'Inter', sans-serif;;
    margin: 0;
  }

  body{
    background-color: ${({ theme }) => theme.color.bg};
    color:${({ theme }) => theme.color.textRepoAndBorder};
   
  }
  button{
    border: none;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }
  input{
    border: none;
  }
`;
