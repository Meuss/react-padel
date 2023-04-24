import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useState } from "react";
import Welcome from "./components/Welcome";
import Shots from "./components/Shots";
import Header from "./components/Header";
import Nav from "./components/Nav";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <div className="container py-8">
            <div className="flex justify-between gap-20">
              <Nav />
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/shots" element={<Shots />} />
              </Routes>
            </div>
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
