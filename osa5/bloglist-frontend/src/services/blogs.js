import axios from "axios";
const baseUrl = "/api/blogs";
let token = null;


const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};
const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default {
  setToken,
  getAll,
  create,
  update,
  remove,
};
