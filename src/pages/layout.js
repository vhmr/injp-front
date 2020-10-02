import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/appBar";
import Footer from "../sections/Footer";
import Home from "./page_home";
import About from "./page_about";
import Contact from "./page_contacto";
import Devocionales from "./layout_devocionales";
import Predicaciones from "./layout_predicaciones";
import Ministerios from "./page_ministerio";

export default function Layout() {
  return (
    <div className="app">
      <div className="app__sidebar" />
      <main className="app__content">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/devocionales" component={Devocionales} />
          <Route path="/ministerios" component={Ministerios} />
          <Route path="/predicaciones" component={Predicaciones} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </main>
    </div>
  );
}
