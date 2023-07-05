import React, { useEffect, useState } from "react";
import axios from "axios";

function useBookList() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const getBooks = () => {
    setLoading(true);
    axios
      .get("https://6347ecf70484786c6e8cea40.mockapi.io/books")
      .then((res) => {
        setLoading(false);
        setBooks(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // Error handling
        setLoading(false);
        console.log(err);
        return null;
      });
  };
  useEffect(() => {
    getBooks();
  }, []);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return { books, loading };
}

export default useBookList;
