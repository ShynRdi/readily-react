import React from "react";
import { Box, TextField, Button, Stack, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import useGetUsers from "../Hooks/useGetUsers";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../redux/users/usersAction";
import useFetch from "../Hooks/useFetch";
const Login = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { data } = useFetch(fetchUsers, "users"); //useGetUsers();
  const userData = data.map((user) => [user.username, user.password]);
  console.log("hadi", userData);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userEmail = data.email;
    const userPass = data.password;
    for (let user = 0; user < userData.length; user++) {
      if (userData[user][0] == userEmail && userData[user][1] == userPass) {
        navigate("/home");
        localStorage.setItem("userName", userEmail);
      }
    }
  };
  const { register, handleSubmit, formState, control } = form;
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
              type="email"
              label="Email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              InputLabelProps={{ className: "input-label-style" }}
              inputProps={{ className: "input-style" }}
              FormHelperTextProps={{ className: "input-error-style" }}
              type="password"
              label="Password"
              {...register("password", {
                required: "Password is required",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Stack>
        </form>
        <DevTool control={control} />
      </Box>
    </Container>
  );
};

export default Login;
