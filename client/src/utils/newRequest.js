import axios from "axios";
const currentUser = localStorage.getItem("currentUser");
let newRequest;
if (currentUser !== "null") {
  const jsonResult = JSON.parse(currentUser);
  const token = jsonResult.token;
  newRequest = axios.create({
    baseURL: "http://localhost:8800/api/",
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });
} else {
  newRequest = axios.create({
    baseURL: "http://localhost:8800/api/",
    withCredentials: true,
  });
}

export default newRequest;
