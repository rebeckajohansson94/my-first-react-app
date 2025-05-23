export default function TagButton({ text, onClick }) {
  return (
    <button className="tag-btn" onClick={onClick}>
      {text}
    </button>
  );
}
