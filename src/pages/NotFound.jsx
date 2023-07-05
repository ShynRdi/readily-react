import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="main-part">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: " 1rem",
          alignItems: "center",
          marginTop: "135px",
          backgroundColor: "#ffc107",
          padding: "5rem",
          border: "0.5rem solid #1976D2",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          width: "75%",

          // textAlign: "center",
        }}
      >
        <section class="page_404">
          <div class="four_zero_four_bg">
            <h1 class="text-center ">404</h1>
          </div>
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt=""
            height="400px"
          />

          {/* <h2>Look like you're lost</h2> */}
        </section>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p> Let's take back to the home page</p>
          <Link to={"/home"}>
            <Button variant="contained" color="primary">
              Click Me!
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default NotFound;
