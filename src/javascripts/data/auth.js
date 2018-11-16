import firebase from 'firebase/app';
import 'firebase/auth';

const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log(result.user.displayName);
    })
    .catch((err) => {
      console.error('you done goofed', err);
    });
};

const logout = () => firebase.auth().signOut();

export default { googleAuth, logout };
