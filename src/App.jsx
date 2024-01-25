import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "../data";
import Header from "./componets/header/Header";
import Promotion from "./componets/promotion/Promotion";
import Heading from "./componets/heading/Heading";
import Gallery from "./componets/gallery/Gallery";

const { header, promotion, heading, gallery } = data;

function App() {
  return (
    <div>
      <Header cabeza={header}></Header>
      <Promotion promocion={promotion}></Promotion>
      <Heading text={heading}></Heading>
      <Gallery foto={gallery}></Gallery>
    </div>
  );
}

export default App;
