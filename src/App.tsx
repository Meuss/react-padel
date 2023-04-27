import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";
import Welcome from "./components/Welcome";
import Shots from "./components/Shots";
import Header from "./components/Header";
import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";
import bgImage from "./images/padel-bg.jpg";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//       cacheTime: Infinity,
//     },
//   },
// });

const App = () => {
  return (
    <div
      style={{ backgroundImage: "url(" + bgImage + ")" }}
      className="relative flex min-h-screen flex-col bg-cover bg-center text-primary-50"
    >
      <BrowserRouter>
        <Provider store={store}>
          {/* <QueryClientProvider client={queryClient}> */}
          <Header />
          <div className="flex-1 bg-black bg-opacity-95">
            <MobileMenu />
            <div className="container py-8">
              <div className="flex justify-between gap-20">
                <div className="hidden md:block">
                  <Nav />
                </div>
                <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/shots" element={<Shots />} />
                </Routes>
              </div>
            </div>
          </div>
          {/* </QueryClientProvider> */}
        </Provider>
      </BrowserRouter>
      <div className="mq-helper pointer-events-none fixed bottom-2 left-2 bg-primary-500 p-1 text-xs font-normal text-black" />
    </div>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Could not find root container");
}
const root = createRoot(container);
root.render(<App />);
