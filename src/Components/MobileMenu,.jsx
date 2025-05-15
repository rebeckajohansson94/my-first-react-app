import SidebarButton from "./Sidebar/SidebarButton";

export default function MobileMenu({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <ul className="mobile-nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
      <div mobile-tasks>
        <SidebarButton text="Task 1" />
        <SidebarButton text="Task 2" />
        <SidebarButton text="Task 3" />
      </div>
    </div>
  );
}
