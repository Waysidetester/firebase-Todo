import $ from 'jquery';
import './events.scss';
import firebase from 'firebase/app';
import displayToDo from '../components/toDo/displayToDo';
import auth from '../data/auth';
import 'firebase/auth';

const loginClick = () => {
  $('#login').on('click', auth.googleAuth);
  $('#login').on('click', displayToDo.displayToDo);
};

const logoutClick = () => {
  $('#logout').on('click', auth.logout);
};

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('hello');
    } else {
      console.log('user not logged in');
    }
  });
};

export default { loginClick, logoutClick, checkLoginStatus };
