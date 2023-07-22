import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Md from "../components/Modal";
import useFetch from "../Hooks/useFetch";
import { fetchBooks } from "../redux/bookList/bookListAction";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import forceUpdate

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(title, author, description, image) {
  return { title, author, description, image };
}

export default function CustomizedTables() {
  const { data: books, fetchData } = useFetch(fetchBooks, "books");
  // const navigate = useNavigate();
  // useEffect;
  // const [fakeState, setFakeState] = useState("");

  function removeHandler(e) {
    const getId = e.target.id;
    console.log(456, getId);
    axios
      .delete(`https://6347ecf70484786c6e8cea40.mockapi.io/books/${getId}`)
      .then(() => {
        // useFetch(fetchBooks, "books");
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // useEffect(() => {
  //   setFakeState("Asd");
  // }, []);
  console.log(books);
  window.shayan = fetchData;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="center">Author</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Remove</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ textAlign: "left" }}>
                {row.author}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ textAlign: "left" }}>
                {row.details}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Md image={row.image} title={row.title} />
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  color="error"
                  id={row.id}
                  onClick={removeHandler}
                >
                  Remove
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
