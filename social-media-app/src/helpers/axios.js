import axios from "axios";
import { getAccessToken, getRefreshToken, getUser } from "../hooks/user.actions";

import createAuthRefreshInterceptor from "axios-auth-refresh";

const axiosService = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosService.interceptors.request.use(async (config) => {
  /**
   * Recibiendo el access token del localStorage y agregandolo
   * Al header del request
   */
  config.headers.Authorization = `"Bearer" ${getAccessToken()}`;
  return config;
});

axiosService.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => Promise.reject(err),
);

const refreshAuthLogic = async (failedRequest) => {
  const { refresh } =
    JSON.parse(localStorage.getItem("auth"));
  return axios
    .post("/refresh/", 
      {
        Authorization: `Bearer ${getRefreshToken()}`,
      },
      { 
        baseURL: "http://localhost:8000/api",
      }
    )
    .then((resp) => {
      const { access } = resp.data;
      failedRequest.response.config.headers[
        "Authorization"] =
        "Bearer " + access;
      localStorage.setItem("auth", JSON.stringify({
        access, refresh:getRefreshToken(), user:getUser()
      }));
    })
    .catch(() => {
      localStorage.removeItem("auth");
    });
};

createAuthRefreshInterceptor(axiosService, refreshAuthLogic);

export function fetcher(url) {
  return axiosService.get(url).then((res) => res.data);
}

export default axiosService;
