import axios from "axios";

const instance = axios.create({
  baseURL: "https://organasyapi.herokuapp.com",
});

//the code below can be use when the request needs a auth token

// instance.interceptors.request.use(
//   async (config) => {
//     const token = await getToken();
//     if (token !== null) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     config.headers["Content-Type"] = "application/json";
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

export default instance;
