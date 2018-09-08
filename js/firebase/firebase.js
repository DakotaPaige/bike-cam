import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBADHjd0hp_kuBnn-sIM5e2g8L3UQOSYso',
  authDomain: 'bikecam-82286.firebaseapp.com',
  databaseURL: 'https://bikecam-82286.firebaseio.com',
  projectId: 'bikecam-82286',
  storageBucket: 'bikecam-82286.appspot.com',
  messagingSenderId: '300964632555'
};
firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export default auth;
