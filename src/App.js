import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout";
import { FaWhatsapp } from 'react-icons/fa';
import { DevocialContextProvider } from './context/devocionalCotext'
function App() {
  return (
    <BrowserRouter>
      <DevocialContextProvider>
        <Layout />
        <a
          href="https://wa.me/+584142583855"
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp class="whatsapp-icon" />
        </a>
      </DevocialContextProvider>
    </BrowserRouter>
  );
}

export default App;
