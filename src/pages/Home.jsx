import React from "react";
import DialogBox from "../components/DialogBox";
import Header from "../components/Header";
import { Box, Button, Container } from "@mui/material";
import useBookList from "../Hooks/useBooksList";
import BasicTable from "../components/BasicTable";
function Main() {
  // const moz = useBookList();
  // console.log(moz);
  return (
    <Container>
      {/* <Header /> */}
      {/* <Button className="back-button" variant="contained">
        Moz
      </Button> */}
      {/* <DialogBox /> */}
      {/* <div>{moz}</div> */}
      <BasicTable />
    </Container>
  );
}
export default Main;
