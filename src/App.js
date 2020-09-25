import React from "react";
import "./App.css";
import Nav from "./components/appBar";
import Header from "./components/sections/slider";
import About from "./components/sections/about";
import Actv from "./components/sections/gallery";
import Card from "./components/sections/cards";
import Devocionales from "./components/sections/devocionales";
import Footer from "./components/sections/Footer";
import Predicacion from "./components/sections/predicacion";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Predicacion />
      <Devocionales />
      <Card />
      <Actv />
      <Footer />
    </div>
  );
}

export default App;
