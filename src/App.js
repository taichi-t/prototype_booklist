import React from "react";
import "./App.css";
import BookContextProivider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProivider></BookContextProivider>
    </div>
  );
}

export default App;
