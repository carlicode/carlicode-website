import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import Layout from "./components/Layout";
import "./index.css";
import "./App.css";
import Collaborations from "./pages/Collaborations";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import { LanguageProvider } from "./components/LanguageProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider><BrowserRouter><Routes><Route element={<Layout />}><Route path="/" element={<App />} /><Route path="/collaborations" element={<Collaborations />} /><Route path="/colaboraciones" element={<Collaborations />} /><Route path="/coalboraciones" element={<Collaborations />} /><Route path="/comunidad" element={<Community />} /><Route path="/contacto" element={<Contact />} /><Route path="/CV" element={<CV />} /><Route path="/cv" element={<CV />} /><Route path="*" element={<App />} /></Route></Routes></BrowserRouter></LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>
);
