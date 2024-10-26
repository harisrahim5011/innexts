import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

import Content from "./components/Content.jsx";
import CloudMovingIcons from "./components/CloudMovingIcons.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import Carousel2 from "./components/Carousel2.jsx";
import CardInfo from "./components/CardInfo.jsx";
import NavFinal from "./components/NavFinal.jsx";
import MobileCarousel from "./components/MobileCarousel.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>

    {/* <App /> */}

    <NavFinal></NavFinal>
    {/* <Card></Card> */}
    <MobileCarousel></MobileCarousel>
    <Carousel2></Carousel2>
    <Content></Content>

    {/* <CloudMovingIcons></CloudMovingIcons> */}

    <CardInfo></CardInfo> 
    <Footer></Footer>
  </StrictMode>
);
