import { BASE_URL } from "./constants";
import axios from "axios";

//get all
async function getAll(endpoint, token) {
  try {
    const response = await axios.get(BASE_URL + endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

//get one
async function getOne(endpoint, id, token) {
  try {
    const response = await axios.get(BASE_URL + endpoint + `/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

//post
async function post(endpoint, payload, token) {
  try {
    const response = await axios.post(BASE_URL + endpoint, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

//delete
async function deleteOne(endpoint, id, token) {
  try {
    const response = await axios.delete(BASE_URL + endpoint + `/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

//put
async function put(endpoint, id, payload) {
  try {
    const response = await axios.put(BASE_URL + endpoint + `/${id}`, payload);
    return response.data;
  } catch (error) {
    return error;
  }
}

//patch
async function patch(endpoint, id, payload, token) {
  try {
    const response = await axios.patch(
      BASE_URL + endpoint + `/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

//login

const controller = {
  post: post,
  getAll: getAll,
  getOne: getOne,
  delete: deleteOne,
  put: put,
  patch: patch,
};

export default controller;
