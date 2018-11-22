import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
import authEvents from './javascripts/events/authEvents';
import addTaskEvents from './javascripts/events/addTaskEvent';

const init = () => {
  firebase.initializeApp(apiKeys.config);
  authEvents.initEvents();
  addTaskEvents.createForm();
};

init();
