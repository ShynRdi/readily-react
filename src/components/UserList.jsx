// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function UserList() {
//   const [loading, setLoading] = useState(true);
//   const [users, setUsers] = useState([]);
//   const getUsers = () => {
//     setLoading(true);
//     axios
//       .get("https://6347ecf70484786c6e8cea40.mockapi.io/users")
//       .then((res) => {
//         setLoading(false);
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         // Error handling
//         setLoading(false);
//         console.log(err);
//         return null;
//       });
//   };
//   useEffect(() => {
//     getUsers();
//   }, []);
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div>
//       {users.map((e, i) => {
//         return <div key={i}>{e.username}</div>;
//       })}
//     </div>
//   );
// }
// export default UserList;
