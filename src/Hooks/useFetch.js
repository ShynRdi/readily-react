import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/usersAction";
import { fetchBooks } from "../redux/bookList/bookListAction";
export default function useFetch(action, entity) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action());
  }, []);

  const storeData = useSelector((state) => ({
    data: state[entity].list,
    loading: state[entity].loading,
    error: state[entity].error,
  }));

  return storeData;
}
