import React from "react";
import BookContextProivider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import { BookList } from "./components/BookList";

function App() {
  return (
    <div className="App">
      <BookContextProivider>
        <Navbar />
        <BookList />
      </BookContextProivider>
    </div>
  );
}

export default App;
