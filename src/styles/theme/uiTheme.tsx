import { createGlobalStyle, DefaultTheme } from "styled-components";

export const dark: DefaultTheme = {
  color: {
    bg: "#0d1117",
    link: "#57a6ff",
    textMain: "#8B949E", //grey
    textProfile: "#c5ced7", //grey2
    textHeader: "#c9d1d9",
    white: "#c9d1d9",
    border: "rgb(238 245 252 / 10%)",
    button: "#22262C",
    header: "#161b22",
    badge: "rgb(58 139 253 / 15%)",
  },
};

export const light = {
  color: {
    bg: "rgb(255 255 255)",
    link: "#57a6ff",
    textRepoAndBorder: "#23282e",
    textRepoProfileAndBorder: "#23282e", //grey2
    textHeader: "#ffffff",
    white: "#22262C",
    border: "rgb(47 53 60)",
    button: "#e6ebef",
    header: "#23282e",
    badge: "rgb(224 247 255)", //tags technology
  },
};

export const GlobalStyle = createGlobalStyle`


  * {
    font-family: 'Inter', sans-serif;;
    margin: 0;
  }

  body{
    background-color: ${({ theme }) => theme.color.bg};
    color:${({ theme }) => theme.color.textMain};
   
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
