import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const toDoData = () => new Promise((resolve, reject) => {
  axios.get(`${apiKeys.config.databaseURL}/tasks.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
    });
});

const getSingleToDo = singleTask => new Promise((resolve, reject) => {
  axios.get(`${apiKeys.config.databaseURL}/tasks/${singleTask}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error);
    });
});

const addToDoData = newTask => axios.post(`${apiKeys.config.databaseURL}/tasks.json`, JSON.stringify(newTask));

const deleteToDoData = taskToDelete => new Promise((resolve, reject) => {
  axios.delete(`${apiKeys.config.databaseURL}/tasks/${taskToDelete}.json`)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});

const editToDoData = (taskToEdit, updatedTask) => new Promise((resolve, reject) => {
  axios.put(`${apiKeys.config.databaseURL}/tasks/${taskToEdit}.json`, JSON.stringify(updatedTask))
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  toDoData,
  addToDoData,
  deleteToDoData,
  getSingleToDo,
  editToDoData,
};
