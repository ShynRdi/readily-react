import React from "react";
import { Container } from "@mui/material";
import BasicTable from "../components/BasicTable";
function Main() {
  return (
    <Container
      sx={{
        marginBottom: "2rem",
      }}
    >
      <BasicTable />
    </Container>
  );
}
export default Main;
