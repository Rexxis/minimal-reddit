import { useState } from "react";
import Navbar from "../component/Navbar";
import Post from "../features/Post/Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Post />
    </div>
  );
}

export default App;
