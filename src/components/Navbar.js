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
    window.scroll({
      top: (document.getElementById(id).offsetTop) -70,
      behavior: 'smooth'
    })    
    setClick(false);
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
          
            <Link to="/" className="navbar-logo" onClick={scroll("slider")}>
              <img src={logo} alt="inj" style={{width: 100}} />
            </Link>
          <div className="navbar-container contanier">
            <div className="menu-icon" onClick={handleClick}>
              {Click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={Click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <div className="nav-links" onClick={scroll("about")}> 
                  Nosotros
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-links"  onClick={scroll("devocionales")}>
                  Devocionales
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-links" onClick={scroll("predicacion")}>
                  Predicaciones
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-links" onClick={scroll("ministerio")}>
                  Ministerios
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-links" onClick={scroll("contacto")}>
                  Contactos
                </div>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/signup" className="btn-link" onClick={closeButton}>
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to="/signup" className="btn-link" onClick={closeButton}>
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
