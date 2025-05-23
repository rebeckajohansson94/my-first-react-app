import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import TagList from "./Components/TagList/TagList";
import PostList from "./Components/PostList/PostList";

function App() {
  return (
    <div className="grid-layout">
      <Navbar />
      <Header />
      <Sidebar />
      <PostList />
      <TagList />
    </div>
  );
}

export default App;
