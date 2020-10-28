import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/Navbar";
import Footer from "../sections/Footer";
import Home from "./page_home";
import About from "./page_about";
import Contact from "./page_contacto";
import Devocional from "./page_devocional";
import Devocionales from "./layout_devocionales";
import Predicaciones from "./layout_predicaciones";
import Ministerios from "./page_ministerio";
import Actividades from "./page_actividades";

export default function Layout() {


  return (
    <div className="app">
      <div className="app__sidebar" />
      <main className="app__content">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/devocional/:id" component={Devocional} />
          <Route path="/ministerio/:id" component={Ministerios} />
          <Route path="/predicaciones" component={Predicaciones} />
          <Route path="/devocionales/:id" component={Devocionales} />
          <Route path="/" component={Home} />
          <Route path="/actividades" component={Actividades} />
        </Switch>
        <Footer />
      </main>
    </div>
  );
}
