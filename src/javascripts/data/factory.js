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

export default { toDoData };
