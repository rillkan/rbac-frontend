import axios from "axios";

const API_URL = "http://localhost:3000";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: token,
  };
};

export const getArticles = async () => {
  return axios.get(`${API_URL}/articles`, {
    headers: getAuthHeaders(),
  });
};

export const createArticle = async (articleData) => {
  return axios.post(`${API_URL}/articles`, articleData, {
    headers: getAuthHeaders(),
  });
};

export const deleteArticle = async (id) => {
  return axios.delete(`${API_URL}/articles/${id}`, {
    headers: getAuthHeaders(),
  });
};
