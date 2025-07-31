import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import App from "./App";
import Experiencia from "./pages/Experiencia";
import Hobbies from "./pages/Hobbies";
import Influencer from "./pages/Influencer";
import Layout from "./components/Layout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/influencer" element={<Influencer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
