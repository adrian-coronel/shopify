import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaThList, FaShoppingCart, FaUser } from 'react-icons/fa';
import '../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-brand">ShopWeb</span>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              <FaHome /> Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" onClick={() => setMenuOpen(false)}>
              <FaThList /> Categorías
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
              <FaShoppingCart /> Carrito
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
              <FaUser /> Perfil
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
