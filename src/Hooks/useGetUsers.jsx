import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/usersAction";

const useGetUsers = () => {
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const dispatch = useDispatch();
  const storeData = useSelector((state) => ({
    users: state.users.list,
    loading: state.users.loading,
    error: state.users.error,
  }));
  const { users, loading, error } = storeData;
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const userList = users.map((user) => [user.username, user.password]);

  return userList;
};

export default useGetUsers;
