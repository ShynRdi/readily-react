import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/bookList/bookListAction";

const useBookList = () => {
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const dispatch = useDispatch();
  const storeData = useSelector((state) => ({
    books: state.books.list,
    loading: state.books.loading,
    error: state.error,
  }));
  const { books, loading, error } = storeData;
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  const bookList = books.map((book) => [book.image, book.username]);

  return bookList;
  console.log(books);
};
export default useBookList;
