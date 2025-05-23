import TagButton from "./TagButton";

export default function TagList() {
  const tagBtnArr = [
    "Magic",
    "Battles",
    "Mount Doom",
    "Elves",
    "Orcs",
    "The Ring",
    "Journey",
    "Middle-earth",
    "Fellowship",
    "Bilbo",
    "Smaug",
    "Dwarves",
    "The Shire",
    "Gandalf",
    "Thorin",
    "Lonely Mountain",
  ];

  function btnClicked(tag) {
    console.log(`Button tag clicked: ${tag}!`);
  }

  return (
    <section className="tag-list">
      {tagBtnArr.map((tag, index) => (
        <TagButton key={index} text={tag} onClick={() => btnClicked(tag)} />
      ))}
    </section>
  );
}
