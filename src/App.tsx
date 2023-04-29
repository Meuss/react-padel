import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./store";
import Welcome from "./components/Welcome";
import Shots from "./components/Shots";
import Tips from "./components/Tips";
import Focus from "./components/Focus";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";
import bgImage from "./images/padel-bg.jpg";

const darkTheme = createTheme({
  typography: {
    fontFamily: ["Avenir", "Roboto"].join(","),
  },
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <div
      style={{ backgroundImage: "url(" + bgImage + ")" }}
      className="relative flex min-h-screen flex-col overflow-hidden bg-cover bg-fixed bg-center text-primary-50"
    >
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header />
            <div className="flex-1 bg-black bg-opacity-60">
              <MobileMenu />
              <div className="container py-8">
                <div className="flex justify-between gap-20">
                  <div className="hidden md:block">
                    <Nav />
                  </div>
                  <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/shots" element={<Shots />} />
                    <Route path="/tips" element={<Tips />} />
                    <Route path="/focus" element={<Focus />} />
                    <Route path="/rackets" element={<Welcome />} />
                  </Routes>
                </div>
              </div>
            </div>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
      {process.env.NODE_ENV === "development" && (
        <div className="mq-helper pointer-events-none fixed bottom-2 left-2 bg-primary-500 p-1 text-xs font-normal text-black" />
      )}
    </div>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Could not find root container");
}
const root = createRoot(container);
root.render(<App />);
