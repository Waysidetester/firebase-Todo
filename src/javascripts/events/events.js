import $ from 'jquery';
import './events.scss';
import auth from '../data/auth';

const loginClick = () => {
  $('#login').on('click', () => {
    auth.googleAuth();
  });
};


export default { loginClick };
