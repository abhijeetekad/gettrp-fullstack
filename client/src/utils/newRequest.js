import axios from "axios";
const currentUser = localStorage.getItem("currentUser");
let newRequest;
if (currentUser !== "null" && currentUser) {
  const jsonResult = JSON.parse(currentUser);
  const token = jsonResult.token;
  newRequest = axios.create({
    baseURL: "https://harlequin-seal-boot.cyclic.app/api/",
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });
} else {
  newRequest = axios.create({
    baseURL: "https://harlequin-seal-boot.cyclic.app/api/",
    withCredentials: true,
  });
}

export default newRequest;
