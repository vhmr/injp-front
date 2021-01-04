import React from 'react';
import '../footer.css';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import logo from "../logo.png";

function Footer() {
  return (
    <div className='footer-container' id="contacto">
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Unete a nuestra familia de la fé para recibir nuestro contenido 
        </p>
        <p className='footer-subscription-text'>
          Puedes suscribirte cuando quieras.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Suscribete</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Nosotros</h2>
            <Link to='/'>Historia</Link>
            <Link to='/'>Equipo de trabajo</Link>
            <Link to='/'>Visión y Misión</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contactos</h2>
            <Link to='/'>Contactos</Link>
            <Link to='/'>Nuestra ubicación</Link>
            <Link to='/'>Donaciones</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Canal</Link>
            <Link to='/'>Última predica</Link>
            <Link to='/'>Serie corazón apasionado por cristo</Link>
            <Link to='/'>Serie un paso a la vez</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='//www.instagram.com/nuevajerusalemvzla/' target='_blank'>Instagram</Link>
            <Link to='//www.facebook.com/NuevaJerusalemvzla' target='_blank'>Facebook</Link>
            <Link to='//youtube.com/channel/UCrbqmYxApdICQJXjPY6EFsw' target='_blank'>Youtube</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={logo} alt="inj" style={{width: 100, height: 'auto', border: 0}} />
            </Link>
          </div>
          <small className='website-rights'>Iglesia Nueva Jerusalen© 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='//www.facebook.com/NuevaJerusalemvzla'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.instagram.com/nuevajerusalemvzla/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//youtube.com/channel/UCrbqmYxApdICQJXjPY6EFsw'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;