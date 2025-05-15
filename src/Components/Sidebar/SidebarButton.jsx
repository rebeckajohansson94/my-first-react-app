export default function SidebarButton({ text }) {
  return (
    <button className="sidebar-btn">
      <span className="icon-sidebarbtn">
        <i className="fas fa-angle-double-right"></i>
      </span>
      {text}
    </button>
  );
}
