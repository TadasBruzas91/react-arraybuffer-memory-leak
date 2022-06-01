import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/styles/Themes.styled";
import { GlobalStyles } from "./components/styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
