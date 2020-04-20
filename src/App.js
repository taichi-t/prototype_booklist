import React from "react";
import BookContextProivider from "./contexts/BookContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BookContextProivider>
        <Navbar />
      </BookContextProivider>
    </div>
  );
}

export default App;
