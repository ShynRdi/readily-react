import React from "react";
import { Box, TextField, Button, Grid, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import "../assets/sass/components/_addBooks.scss";

const AddBooks = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      bookName: "",
      author: "",
      description: "",
      imageUrl: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/home");
  };
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;
  return (
    <Container>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
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
        <h1>Add Your Books Details</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="add-books-form"
        >
          <Grid container spacing={2}>
            {/* <Stack spacing={2} width={400}> */}
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                classes={{ root: "w-100" }}
                type="text"
                label="Book's name"
                {...register("bookName", {
                  required: "Name of book is required",
                })}
                error={!!errors.bookName}
                helperText={errors.bookName?.message}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                classes={{ root: "w-100" }}
                type="text"
                label="Author's name"
                {...register("author", {
                  required: "author's name is required",
                })}
                error={!!errors.author}
                helperText={errors.author?.message}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                classes={{ root: "w-100" }}
                type="text"
                label="Write your own description"
                {...register("description", {
                  required: "Description is required",
                })}
                error={!!errors.bookName}
                helperText={errors.bookName?.message}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <TextField
                classes={{ root: "w-100" }}
                type="text"
                label="Books' Image ('URL')"
                {...register("imageUrl", {
                  required: "Url of image is required",
                })}
                error={!!errors.imageUrl}
                helperText={errors.imageUrl?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add Book
              </Button>
            </Grid>
          </Grid>
          {/* </Stack> */}
        </form>
        <DevTool control={control} />
      </Box>
    </Container>
  );
};

export default AddBooks;
