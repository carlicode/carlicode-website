import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import Redirect from "./components/Redirect";
import { LanguageProvider } from "./components/LanguageProvider";
import Collaborations from "./pages/Collaborations";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Museum from "./pages/Museum";
import MuseumPiece from "./pages/MuseumPiece";
import NotFound from "./pages/NotFound";
import "./index.css";
import "./App.css";

const redirects = {
  "/collaborations": "/media-kit",
  "/colaboraciones": "/media-kit",
  "/coalboraciones": "/media-kit",
  "/comunidad": "/museo?sala=comunidad",
  "/comunidades": "/museo?sala=comunidad",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/media-kit" element={<Collaborations />} />
            <Route path="/museo" element={<Museum />} />
            <Route path="/museo/:id" element={<MuseumPiece />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
            {Object.entries(redirects).map(([from, to]) => <Route key={from} path={from} element={<Redirect to={to} />} />)}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);
