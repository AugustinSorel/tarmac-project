import { ThemeProvider } from "styled-components";
import Navbar from "./shared/components/Navigation/Navbar";
import GlobalStyle from "./shared/styles/GlobalStyle";
import theme from "./shared/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
