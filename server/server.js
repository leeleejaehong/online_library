const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true });

// 스키마 정의
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
});

const Book = mongoose.model('Book', bookSchema);

// API 엔드포인트
app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post('/books', async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.status(201).json(newBook);
});

// 서버 시작
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
