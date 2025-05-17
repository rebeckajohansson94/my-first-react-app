import { useState } from "react";
import MobileMenu from "../Responsive/MobileMenu";
import navbarLinks from "./NavLinks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars"></i>
      </button>

      {/* Shown only on larger screens */}
      <ul className="navbar-list">
        {navbarLinks.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>

      {/* Shown only in mobile view */}
      <MobileMenu isOpen={menuOpen} links={navbarLinks} />
    </nav>
  );
}
