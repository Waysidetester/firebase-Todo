import $ from 'jquery';
import factory from '../../data/factory';

const buildToDo = (tasks) => {
  let domString = '';
  $.each(tasks, (i, objective) => {
    domString += `
    <div id="${objective.id}">
      <p>${objective.task}</p>
      <p>${objective.isCompleted ? 'Task is complete' : 'Needs to be completed'}</p>
    </div>`;
  });
  return domString;
};

const displayToDo = () => {
  factory.toDoData()
    .then((objectives) => {
      const tasksObject = objectives;
      const tasksArray = [];
      if (tasksObject !== null) {
        Object.keys(tasksObject).forEach((taskId) => {
          tasksObject[taskId].id = taskId;
          tasksArray.push(tasksObject[taskId]);
        });
        $('#to-do').html(buildToDo(tasksArray));
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { displayToDo };
