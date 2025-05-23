import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        className="sidebar-logo"
        src="/src/assets/logo.jpg"
        alt="Logo image"
      />
      <SidebarButton text="The Fellowship of the ring" />
      <SidebarButton text="The Two Towers" />
      <SidebarButton text="The Return of the King" />
      <SidebarButton text="The Hobbit: An Unexpected Journey" />
    </aside>
  );
}
