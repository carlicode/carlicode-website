import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import Layout from "./components/Layout";
import "./index.css";
import "./App.css";
import Collaborations from "./pages/Collaborations";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/colaboraciones" element={<Collaborations />} />
            <Route path="/coalboraciones" element={<Collaborations />} />
            <Route path="*" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
