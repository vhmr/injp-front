import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
