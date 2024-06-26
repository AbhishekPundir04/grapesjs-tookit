import axios from "axios";
import store from "../app/redux/store";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,

  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY,
    "Accept-Language": "en",
  },
});

axiosInstance.interceptors.request.use(
  function configuration(config) {
    // store.dispatch(setLoading(true));
    const token =
      localStorage.getItem("ACCESS_TOKEN_CHITRAKOOT") ||
      localStorage.getItem("RESET_TOKEN_CHITRAKOOT");
    if (token) config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (result) {
    // store.dispatch(setLoading(false));
    return result;
  },
  function (error) {
    // store.dispatch(setLoading(false));
    if (error.response && error.response.data.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export const GET = async (url, params) => {
  try {
    let result = await axiosInstance.get(url, { params: params });
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const DELETE = async (url, params, data) => {
  try {
    let result = await axiosInstance.delete(url, { params, data });
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const POST = async (url, body, options) => {
  try {
    let result = await axiosInstance.post(url, body, options);
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const PUT = async (url, body, options) => {
  try {
    let result = await axiosInstance.put(url, body, options);
    return result;
  } catch (error) {
    return error?.response;
  }
};

export const PATCH = async (url, body, options) => {
  try {
    let result = await axiosInstance.patch(url, body, options);
    return result;
  } catch (error) {
    return error?.response;
  }
};

export { axiosInstance };

export default axios;
