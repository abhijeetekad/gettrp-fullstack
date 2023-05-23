import axios from "axios";
const currentUser = await localStorage.getItem("currentUser");
const jsonResult = JSON.parse(currentUser)
const token = jsonResult.token
const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
  headers: { Authorization: `Bearer ${token}` }
});

export default newRequest;
