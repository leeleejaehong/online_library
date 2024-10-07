import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://openlibrary.org/works/${id}.json`) // 'works' 엔드포인트를 사용
      .then((response) => {
        if (!response.ok) {
          throw new Error("책을 찾을 수 없습니다.");
        }
        return response.json();
      })
      .then((data) => setBook(data))
      .catch((error) => {
        console.error(error);
        setBook(null);
      });
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetail;
