import SidebarButton from "./SidebarButton";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <SidebarButton text="Task 1" />
      <SidebarButton text="Task 2" />
      <SidebarButton text="Task 3" />
    </aside>
  );
}
