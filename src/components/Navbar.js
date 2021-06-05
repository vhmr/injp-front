import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "./Button";
import logo from "../logo.png";
import "../Navbar.css";
import "../Button.css";

function Navbar() {
  const [Click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  let scroll = (id) => () =>{
    if(document.getElementById(id) !== null) {
      window.scroll({
        top: (document.getElementById(id).offsetTop) -70,
        behavior: 'smooth'
      })
    }else{
/*       let dominio = document.domain
      let protocolo = window.location.protocol */

      window.location.href =`/${id}`
    }
    setClick(false);
  }

  let scroll2= (id) =>{
    if(document.getElementById(id) !== null) {
      window.scroll({
        top: (document.getElementById(id).offsetTop) -70,
        behavior: 'smooth'
      })
    }
  }
  
  const handleClick = () => {
    setClick(!Click);
  };

  const closeButton = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    let url = window.location.href;
    let pique = url.split("/");
    let id = pique[3];
    scroll2(id)

    showButton();
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          
            <Link to="/" className="navbar-logo" onClick={scroll("")}>
              <img src={logo} alt="inj" style={{width: 100}} />
            </Link>
          <div className="navbar-container contanier">
            <div className="menu-icon" onClick={handleClick}>
              {Click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={Click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <div className="nav-links" onClick={scroll("/about")}> 
                  Nosotros
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-links"  onClick={scroll("/devocionales")}>
                  Devocionales
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-links" onClick={scroll("/predicacion")}>
                  Predicaciones
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-links" onClick={scroll("/ministerio")}>
                  Ministerios
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-links" onClick={scroll("/contact")}>
                  Contactos
                </div>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
