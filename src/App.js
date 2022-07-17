import React from "react";
import Headernav from "./components/Headernav";
import ContentIntro from "./components/ContentIntro";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Headernav />
      <ContentIntro />
      <Card />
      <Footer />
    </React.Fragment>
  );
}

export default App;
