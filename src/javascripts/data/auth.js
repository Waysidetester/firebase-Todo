import firebase from 'firebase/app';
import 'firebase/auth';

const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export default { googleAuth };
