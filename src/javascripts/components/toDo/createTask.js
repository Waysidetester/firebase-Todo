import $ from 'jquery';

const formBuilder = (object) => {
  const domString = `
  <div class="form-group">
    <label for="form-task">To-Do: </label>
    <input type="text" class="form-control" value="${object.task}" id="form-task" placeholder="Task to Complete">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="completed">
    <label class="form-check-label" for="completed">Complete?</label>
  </div>
  `;
  return domString;
};

const buildAddTask = () => {
  const emptyTask = {
    id: '',
    task: '',
    isCompleted: false,
  };
  let newString = '<h2>Add a Task</h2>';
  newString += formBuilder(emptyTask);
  newString += '<button class="btn btn-success" id="save-task">Save Task</button>';
  $('#form-entry').html(newString);
};

const buildEditTask = (selectedTask) => {
  let newString = '<h2>Edit Task</h2>';
  newString += formBuilder(selectedTask);
  newString += '<button class="btn btn-success" id="update-task">Update Task</button>';
  $('#form-entry').html(newString);
};

export default { buildAddTask, buildEditTask };
