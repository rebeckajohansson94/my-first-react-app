import { useState } from "react";
import SidebarButton from "./SidebarButton";

export default function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <button className="toggle-sidebar" onClick={() => setSidebar(!sidebar)}>
        {sidebar ? (
          "Close"
        ) : (
          <span>
            <i class="fa-solid fa-angles-right"></i>
            Sidebar
          </span>
        )}
      </button>
      <aside className={`sidebar ${sidebar ? "open" : ""}`}>
        <SidebarButton text="Task 1" />
        <SidebarButton text="Task 2" />
        <SidebarButton text="Task 3" />
      </aside>
    </>
  );
}
