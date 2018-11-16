import $ from 'jquery';
import './events.scss';
import auth from '../data/auth';

const loginClick = () => {
  $('#login').on('click', auth.googleAuth);
};

const logoutClick = () => {
  $('#logout').on('click', auth.logout);
};

export default { loginClick, logoutClick };
