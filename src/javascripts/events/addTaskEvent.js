import $ from 'jquery';
import createTask from '../components/toDo/createTask';
import factory from '../data/factory';
import authEvents from './authEvents';

const addTask = () => {
  $('#save-task').on('click', () => {
    const newTask = {
      task: $('#form-task').val(),
      isCompleted: $('#completed').checked,
    };
    factory.addToDoData(newTask);
    $('#form-entry').hide();
    $('#form-entry').html('');
    $('#authentication').show();
    $('#to-do').show();
    authEvents.checkLoginStatus();
  });
};

const createForm = () => {
  $('#add-task').on('click', () => {
    $('#authentication').hide();
    $('#to-do').hide();
    createTask.buildAddTask();
    $('#form-entry').show();
    addTask();
  });
};

export default { createForm };
