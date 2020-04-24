import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

export const Bookform = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <form action="">
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default Bookform;
