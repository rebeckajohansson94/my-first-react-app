export default function Navbar() {
  const navbarLinks = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Contact us", href: "#" },
  ];

  return (
    <nav className="navbar">
      <button className="hamburger">
        <i className="fas fa-bars"></i>
      </button>

      <ul className="navbar-list">
        {navbarLinks.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
