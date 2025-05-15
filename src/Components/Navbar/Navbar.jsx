import { useState } from "react";
import MobileMenu from "../MobileMenu,";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarLinks = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Contact us", href: "#" },
  ];

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars"></i>
      </button>

      {/* For big screens/desktop : */}
      <ul className="navbar-list desktop-only">
        {navbarLinks.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>

      {/* For mobile-version : */}
      <MobileMenu isOpen={menuOpen} />
    </nav>
  );
}
