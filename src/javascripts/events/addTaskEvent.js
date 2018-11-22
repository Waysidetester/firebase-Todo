import $ from 'jquery';
import createTask from '../components/toDo/createTask';
import factory from '../data/factory';

const addTask = () => {
  $('#save-task').on('click', () => {
    const newTask = {
      task: $('#form-task').val(),
      isCompleted: $('#completed').val(),
    };
    factory.addToDoData(newTask);
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
