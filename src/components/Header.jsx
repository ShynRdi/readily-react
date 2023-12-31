import React from "react";
import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetBooks } from "../redux/bookList/bookListAction";
import useLoginChecker from "../Hooks/useLoginChecker";

const Header = () => {
  const baseURL = useLocation();
  const path = baseURL.pathname.toLowerCase();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(resetBooks());
  };
  const loginChecker = useLoginChecker();
  loginChecker;

  return (
    <>
      <Box
        sx={{
          marginBottom: "24px",
          height: "120px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#ffc107",
          top: "0%",
          left: "0%",
          transition: "all 0.2s ease-out",
          zIndex: "1",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 10px -7px",
        }}
      >
        <img
          src="images/readilyblack.png"
          alt=""
          className="readily-logo"
          width="300px"
        />

        <Box
          sx={{
            display: "flex",
            marginRight: "3%",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {baseURL.pathname == "/" ||
          path == "/login" ||
          path == "/signup" ? null : (
            <>
              <Link to={path == "/home" ? "#" : "/home"} className="home-link">
                <Button
                  variant="text"
                  color={path == "/home" ? "primary" : "warning"}
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  HOME
                </Button>
              </Link>
              <Link
                to={path == "/addbooks" ? "#" : "/addbooks"}
                className="home-link"
              >
                <Button
                  variant="text"
                  color={path == "/addbooks" ? "primary" : "warning"}
                  sx={{
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  Add Books
                </Button>
              </Link>
              <Link to="/" className="logout-link">
                <Button
                  variant="text"
                  color="warning"
                  sx={{
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                  onClick={logOut}
                >
                  Log Out
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
