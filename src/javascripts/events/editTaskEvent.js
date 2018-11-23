import $ from 'jquery';
import factory from '../data/factory';
import displayToDo from '../components/toDo/displayToDo';
import createTask from '../components/toDo/createTask';

const updateTask = (editTaskId) => {
  $('#update-task').on('click', () => {
    const newTask = {
      task: $('#form-task').val(),
      isCompleted: $('#completed').prop('checked'),
    };
    factory.editToDoData(editTaskId, newTask)
      .then(() => {
        displayToDo.displayToDo();
      })
      .catch((error) => {
        console.error(error);
      });
    $('#form-entry').hide();
    $('#form-entry').html('');
    $('#authentication').show();
    $('#to-do').show();
  });
};

const editTaskEvent = () => {
  $('body').on('click', '.edit-button', (e) => {
    const taskToEdit = e.currentTarget.dataset.editId;
    factory.getSingleToDo(taskToEdit)
      .then((task) => {
        $('#authentication').hide();
        $('#to-do').hide();
        createTask.buildEditTask(task);
        $('#form-entry').show();
        updateTask(taskToEdit);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export default { editTaskEvent };
