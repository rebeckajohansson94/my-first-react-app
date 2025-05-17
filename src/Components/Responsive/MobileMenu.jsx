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
        <SidebarButton text="Task 1" />
        <SidebarButton text="Task 2" />
        <SidebarButton text="Task 3" />
      </div>
    </div>
  );
}
