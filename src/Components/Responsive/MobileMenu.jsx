/* Component for hamburger menu in mobile view only */

import SidebarButton from "../Sidebar/SidebarButton";

export default function MobileMenu({ isOpen, links }) {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <ul className="mobile-nav-links">
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
      <div>
        <SidebarButton text="The Fellowship of the ring" />
        <SidebarButton text="The Two Towers" />
        <SidebarButton text="The Return of the King" />
        <SidebarButton text="The Hobbit: An Unexpected Journey" />
      </div>
    </div>
  );
}
