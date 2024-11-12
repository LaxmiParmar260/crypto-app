import { Button, Card, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match!");
      return;
    }
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
    }
    if (user) {
      navigate("/");
    }
  }, [user, isError, message, navigate]);

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
          Register Here
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            color="success"
            variant="outlined"
            label="Enter Name"
            type="text"
            fullWidth
            sx={{ margin: "5px 0" }}
            name="name"
            value={name}
            onChange={handleChange}
          />
          <TextField
            color="success"
            variant="outlined"
            label="Enter Email"
            type="email"
            fullWidth
            sx={{ margin: "5px 0" }}
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            color="success"
            variant="outlined"
            label="Enter Password"
            type="password"
            fullWidth
            sx={{ margin: "5px 0" }}
            name="password"
            value={password}
            onChange={handleChange}
          />
          <TextField
            color="success"
            variant="outlined"
            label="Confirm Password"
            type="password"
            fullWidth
            sx={{ margin: "5px 0" }}
            name="password2"
            value={password2}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            sx={{ margin: "10px 0" }}
          >
            Register
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Register;
