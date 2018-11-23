import $ from 'jquery';
import factory from '../data/factory';
import authEvents from './authEvents';

const addTask = () => {
  $('#save-task').on('click', () => {
    const newTask = {
      task: $('#form-task').val(),
      isCompleted: $('#completed').prop('checked'),
    };
    factory.addToDoData(newTask);
    $('#form-entry').hide();
    $('#form-entry').html('');
    $('#authentication').show();
    $('#to-do').show();
    authEvents.checkLoginStatus();
  });
};

const createForm = (typeOfForm, buttonId) => {
  $(buttonId).on('click', () => {
    $('#authentication').hide();
    $('#to-do').hide();
    typeOfForm();
    $('#form-entry').show();
    addTask();
  });
};

export default { createForm };
