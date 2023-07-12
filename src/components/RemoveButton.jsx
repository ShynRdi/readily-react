import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RemoveButton = (props) => {
  const navigate = useNavigate();
  function removeHandler(e) {
    const newId = props.id;
    const getId = e.target.newId;
    console.log(456, getId);
    axios
      .delete(`https://6347ecf70484786c6e8cea40.mockapi.io/books/${getId}`)
      .then(() => <p></p>)
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Button
      variant="contained"
      color="error"
      id={row.id}
      onClick={removeHandler}
    >
      Remove
    </Button>
  );
};

export default RemoveButton;
