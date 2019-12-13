import firebase from 'firebase';

const createUserWithEmailAndPassword = async (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
    console.log("Success createUserWithEmailAndPassword")
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
const signInWithEmailAndPassword = async (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
    console.log("Success signInWithEmailAndPassword")
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

const signOut = async () => {
  return firebase.auth().signOut().then(function () {
    console.log("Success signOut")
  }).catch(function (error) {
    // An error happened.
  });
}

const onAuthStateChanged = async () => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      console.log("We are authenticated now!");
    }
    // Do other things
    return user
  });
}

export default {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
}
