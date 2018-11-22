import $ from 'jquery';
import './events.scss';
import firebase from 'firebase/app';
import displayToDo from '../components/toDo/displayToDo';
import auth from '../data/auth';
import 'firebase/auth';

const loginClick = () => {
  $('#login').on('click', auth.googleAuth);
};

const logoutClick = () => {
  $('#logout').on('click', auth.logout);
};

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#add-task').show();
      displayToDo.displayToDo();
    } else {
      $('#add-task').hide();
      $('#to-do').html('');
    }
  });
};

const initEvents = () => {
  loginClick();
  logoutClick();
  checkLoginStatus();
};

export default { initEvents };
