import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./Pages/Home.jsx";
// import AnimateTest from "./components/AnimateTest.jsx";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import NavFinal from "./components/NavFinal"
// import TestPage from "./Pages/TestPage"
// import TestPageSecond from "./Pages/TestPageSecond"
// import TestNav from "./components/TestNav"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/innexts" element={<NavFinal />}>
          <Route index element={<Home />} />
          <Route path="/innexts/about" element={<About />} />
          <Route path="/innexts/service" element={<Service />} />
          <Route path="/innexts/contact" element={<ContactUs />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
