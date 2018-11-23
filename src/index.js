import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
import authEvents from './javascripts/events/authEvents';
import addTaskEvents from './javascripts/events/addTaskEvent';
import deleteTaskEvent from './javascripts/events/deleteTaskEvent';
import createTask from './javascripts/components/toDo/createTask';
import editTaskEvent from './javascripts/events/editTaskEvent';

const init = () => {
  firebase.initializeApp(apiKeys.config);
  authEvents.initEvents();
  addTaskEvents.createForm(createTask.buildAddTask, '#add-task');
  deleteTaskEvent.deleteTask();
  editTaskEvent.editTaskEvent();
};

init();
