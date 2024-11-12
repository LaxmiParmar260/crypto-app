import { Button, Card, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
    }
    if (user && isSuccess) {
      navigate("/");
    }
  }, [user, isError, message, isSuccess, navigate]);

  if (isLoading) {
    return (
      <Typography variant="h5" sx={{ margin: "20px" }} textAlign="center">
        Loading...
      </Typography>
    );
  }

  return (
    <Container sx={{ padding: "80px 0" }}>
      <Card sx={{ padding: "20px" }}>
        <Typography variant="h5" sx={{ margin: "20px" }} textAlign="center">
          Login Here
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            color="success"
            variant="outlined"
            label="Email"
            fullWidth
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            color="success"
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            sx={{ margin: "20px 0" }}
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="success" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
