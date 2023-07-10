import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Users from "../Hooks/useGetUsers";

const LandingPage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: " 1rem",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffc107",
          padding: "5rem",
          border: "0.5rem solid #1976D2",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        <Typography variant="h6">
          Hello! This is your personal library you can add your books to your
          Home page by "Add Book" button at the bottom of the Home page.
        </Typography>
        <Link to={"/Login"}>
          <Button variant="contained" color="primary">
            Log-in
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default LandingPage;
