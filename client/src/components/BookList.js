import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/subjects/love.json")
  .then((response) => response.json())
  .then((data) => setBooks(data.works));
  }, []);

  return (
    <div>
      <h1>도서 목록</h1>
      <ul>
        {books.map((book) => (
          <li key={book.key}>
          <Link to={`/book/${book.key.split('/').pop()}`}>{book.title}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
