import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
import events from './javascripts/events/authEvents';

const init = () => {
  firebase.initializeApp(apiKeys.config);
  events.loginClick();
  events.logoutClick();
};

init();
