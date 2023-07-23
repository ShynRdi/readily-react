import React from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
  Container,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../redux/users/usersAction";
import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";
const Login = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState, control } = form;
  const { data } = useFetch(fetchUsers, "users"); //useGetUsers();
  const userData = data.map((user) => [user.username, user.password]);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const username = data.username;
    const userPass = data.password;
    for (let user = 0; user < userData.length; user++) {
      if (userData[user][0] == username && userData[user][1] == userPass) {
        navigate("/home");
        localStorage.setItem("userName", username);
      }
    }
  };
  const { errors } = formState;
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
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2} width={400}>
            <TextField
              InputLabelProps={{ className: "input-label-style" }}
              inputProps={{ className: "input-style" }}
              FormHelperTextProps={{ className: "input-error-style" }}
              type="username"
              label="Username"
              {...register("username", {
                required: true,
                min: 2,
                pattern: /[a-zA-Z1-9_]{2,36}/,
              })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              InputLabelProps={{ className: "input-label-style" }}
              inputProps={{ className: "input-style" }}
              FormHelperTextProps={{ className: "input-error-style" }}
              type="password"
              label="Password"
              {...register("password", {
                required: true,
                min: 2,
                pattern: /[a-zA-Z1-9!@#$%^&*_()]{2,36}/,
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "100%" }}
            >
              Login
            </Button>
            <Link to="/signup">
              <Typography variant="body1" color="initial">
                Don't have an account let's make one
              </Typography>
            </Link>
          </Stack>
        </form>
        <DevTool control={control} />
      </Box>
    </Container>
  );
};

export default Login;
