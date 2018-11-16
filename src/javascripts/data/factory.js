import axios from 'axios';

const toDoData = () => axios.get('https://to-do-132d9.firebaseio.com/');

export default { toDoData };
