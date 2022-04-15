import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ArrivalPage from "./pages/ArrivalPage";
import DeparturePage from "./pages/DeparturePage";
import Navbar from "./shared/components/Navigation/Navbar";
import GlobalStyle from "./shared/styles/GlobalStyle";
import theme from "./shared/styles/theme";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />

      <Routes location={location} key={location.pathname}>
        <Route path="/arrival" element={<ArrivalPage />} />
        <Route path="/departure" element={<DeparturePage />} />
        <Route path="*" element={<Navigate to="/arrival" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
