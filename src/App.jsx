import "./App.css";
import { dark, light, GlobalStyle } from "./styles/theme/uiTheme";
import { ThemeProvider } from "styled-components";
import useTheme from "./hook/useTheme";
import GithubProfile from "./components/Home/GithubProfile";
import Header from "./components/Header";

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <GlobalStyle />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <GithubProfile />
      </ThemeProvider>
    </>
  );
}

export default App;
