import React from "react";
import {
  Blog,
  Footer,
  Header,
  Features,
  Possibility,
  WhatGPT3,
} from "./Containers";
import { Brand, CTA, Navbar } from "./Components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
