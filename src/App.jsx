import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
      </div>
    </>
  );
}

export default App;
