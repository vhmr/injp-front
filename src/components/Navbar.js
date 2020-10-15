import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { Button } from "./Button";
import "../Navbar.css";
import "../Button.css";

function Navbar() {
  const [Click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
            <Link to="/" className="navbar-logo" onClick={closeButton}>
              <MdFingerprint className="navbar-icons" />
              VM
            </Link>
          <div className="navbar-container contanier">
            <div className="menu-icon" onClick={handleClick}>
              {Click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={Click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/about" className="nav-links">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item" onClick={closeButton}>
                <Link to="/devocionales" className="nav-links">
                  Devocionales
                </Link>
              </li>
              <li className="nav-item" onClick={closeButton}>
                <Link to="/predicaciones" className="nav-links">
                  Predicaciones
                </Link>
              </li>
              <li className="nav-item" onClick={closeButton}>
                <Link to="ministerios" className="nav-links">
                  Ministerios
                </Link>
              </li>
              <li className="nav-item" onClick={closeButton}>
                <Link to="/contact" className="nav-links">
                  Contactos
                </Link>
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
