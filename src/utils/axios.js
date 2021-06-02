import axios from "axios";

export const apiGet = (path) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios.get(path, config);
};

export const authApiGet = (path) => {
  const token = localStorage.getItem("USER_TOKEN");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(path, config);
};

export const apiPost = (path, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios.post(path, data, config);
};

export const authApiPost = (path, data) => {
  const token = localStorage.getItem("USER_TOKEN");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  return axios.post(path, data, config);
};

export const authApiFormDataPost = (path, data) => {
  const token = localStorage.getItem("USER_TOKEN");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(path, data, config);
};

export const authApiDelete = (path) => {
  const token = localStorage.getItem("USER_TOKEN");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.delete(path, { ...config });
};
