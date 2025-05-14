import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const navbarLinks = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Contact us", href: "#" },
  ];

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={() => setMenu(!menu)}>
        <i className="fas fa-bars"></i>
      </button>

      <ul className={`navbar-list ${menu ? "show" : ""}`}>
        {navbarLinks.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
