import axios from "axios";
const currentUser = await localStorage.getItem("currentUser");
const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
  headers: { Authorization: `Bearer ${currentUser}` }
});

export default newRequest;
