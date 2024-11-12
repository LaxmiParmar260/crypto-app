import axios from "axios";

//register user
const register = async (formData) => {
  const response = await axios.post("/api/user/register", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};


//login user
const login = async (formData) => {
  const response = await axios.post("/api/user/login", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
