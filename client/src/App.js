import React from "react";
import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
// import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/book/:id" element={<BookDetail />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
