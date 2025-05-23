import Post from "./Post";

export default function PostList() {
  const posts = [
    {
      title: "The Fellowship of the ring",
      body: "A humble hobbit begins an epic journey to destroy a powerful ring, forming a fellowship to protect Middle-earth.",
    },
    {
      title: "The Two Towers",
      body: "As the fellowship is broken, new alliances are formed and battles erupt while Frodo continues his perilous journey.",
    },
    {
      title: "The Return of the King",
      body: "The final battle for Middle-earth begins as the ring-bearer's burden nears its end at Mount Doom.",
    },
    {
      title: "The Hobbit: An Unexpected Journey",
      body: "Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor, facing trolls, goblins, and a dragon along the way.",
    },
  ];

  return (
    <section className="post-list">
      {posts.map((post, index) => (
        <article key={index} className="post-card">
          <Post title={post.title} body={post.body} />
          <span className="author">- J.R.R. Tolkien</span>
        </article>
      ))}
    </section>
  );
}
