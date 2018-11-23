import $ from 'jquery';
import factory from '../data/factory';
import authEvents from './authEvents';

const deleteTask = () => {
  $('body').on('click', '.delete-button', (e) => {
    const taskToDelete = e.currentTarget.dataset.deleteId;
    factory.deleteToDoData(taskToDelete)
      .then(() => {
        authEvents.checkLoginStatus();
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export default { deleteTask };
