import $ from 'jquery';
import factory from '../data/factory';
import displayToDo from '../components/toDo/displayToDo';
// import editTask from '../components/toDo/editTask';

const displayEditInput = (currentTask, divId) => {
  const domString = `<input id="edit-task-input" type="text" value="${currentTask.task}"/>
  <input id="edit-task-complete" type="checkbox" ${currentTask.isCompleted ? 'checked' : ''}/>
  <button id="update-task" class="btn btn-warning">Edit</button>`;
  $(`#${divId}`).html(domString);
};

const updateTask = (editTaskId) => {
  $('#update-task').on('click', () => {
    const newTask = {
      task: $('#edit-task-input').val(),
      isCompleted: $('#edit-task-complete').prop('checked'),
    };
    factory.editToDoData(editTaskId, newTask)
      .then(() => {
        displayToDo.displayToDo();
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

const editTaskEvent = () => {
  $('body').on('click', '.edit-button', (e) => {
    const taskToEdit = e.currentTarget.dataset.editId;
    factory.getSingleToDo(taskToEdit)
      .then((task) => {
        displayEditInput(task, taskToEdit);
        updateTask(taskToEdit);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export default { editTaskEvent, updateTask };
