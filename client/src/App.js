import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('http://localhost:5000/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const addBook = async () => {
    const response = await axios.post('http://localhost:5000/books', newBook);
    setBooks([...books, response.data]);
    setNewBook({ title: '', author: '', year: '' });
  };

  return (
    <div>
      <h1>도서관</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.title} - {book.author} ({book.year})</li>
        ))}
      </ul>
      <h2>새 도서 추가</h2>
      <input
        type="text"
        placeholder="제목"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="저자"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <input
        type="number"
        placeholder="연도"
        value={newBook.year}
        onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
      />
      <button onClick={addBook}>추가</button>
    </div>
  );
}

export default App;
