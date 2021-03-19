import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    //underneath lines are copied from firebase console
    apiKey: "AIzaSyCYIV4JO8IwZFNJSg_xnYqT-uVJlpQyDts",
    authDomain: "todo-app-28c59.firebaseapp.com",
    projectId: "todo-app-28c59",
    storageBucket: "todo-app-28c59.appspot.com",
    messagingSenderId: "531978649933",
    appId: "1:531978649933:web:3b0990425e0d8228eab704",
    measurementId: "G-YZ636GRXNR"
});

const db=firebaseApp.firestore();

export default db;