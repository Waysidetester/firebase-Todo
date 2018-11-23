import $ from 'jquery';
import factory from '../../data/factory';
import './toDo.scss';

const garbageIcon = 'https://png.icons8.com/trash-can/androidL/1600';
const pencilIcon = 'https://image.flaticon.com/icons/svg/61/61456.svg';

const buildToDo = (tasks) => {
  let domString = '<h2>Need to Complete</h2>';
  let newString = '<h2>Completed</h2>';
  $.each(tasks, (i, objective) => {
    if (!objective.isCompleted) {
      domString += `
      <div id="${objective.id}">
        <p><strong>${objective.task}</strong></p>
        <p>
          Needs to be completed
            <span>
              <button class="btn btn-warning edit-button" data-edit-id=${objective.id}>
                <img class="trash-icon" src="${pencilIcon}" alt="edit" />
              </button>
              <button class="btn btn-danger delete-button" data-delete-id=${objective.id}>
                <img class="trash-icon" src="${garbageIcon}" alt="delete" />
              </button>
            </span>
        </p>
      </div>`;
    } else {
      newString += `
      <div id="${objective.id}">
        <p><strong>${objective.task}</strong></p>
        <p>Task is complete
          <span>
            <button class="btn btn-danger delete-button" data-delete-id=${objective.id}>
              <img class="trash-icon" src="${garbageIcon}" alt="delete" />
            </button>
          </span>
        </p>
      </div>`;
    }
  });
  domString += newString;
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
