const firebase = require('firebase/app');
// Add the Firebase products that you want to use
require('firebase/firestore');

firebase.default.initializeApp({
  apiKey: 'AIzaSyDLa9GjSaqmcB7G59FqRTMmbVYCxTGdiNY',
  authDomain: 'proximity-challenge.firebaseapp.com',
  databaseURL: 'https://proximity-challenge.firebaseio.com',
  projectId: 'proximity-challenge',
  storageBucket: 'proximity-challenge.appspot.com',
  messagingSenderId: '882283472127',
  appID: '1:882283472127:web:fe11a8f44572a2555f58ca',
});

const db = firebase.default.firestore();

export const dbProducts = db.collection('products');
