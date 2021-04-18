import firebase from 'firebase';

var firebaseConfig = {
   /*  apiKey: "AIzaSyAyTuc3bkr8cEEuVqr-bb5QXw_C4bMDuME",
    authDomain: "my-first-crud-59c02.firebaseapp.com",
    databaseURL: "https://my-first-crud-59c02-default-rtdb.firebaseio.com",
    projectId: "my-first-crud-59c02",
    storageBucket: "my-first-crud-59c02.appspot.com",
    messagingSenderId: "174708377135",
    appId: "1:174708377135:web:a8aac2aace15e41ef168da",
    measurementId: "G-8H1T36CTXD" */

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,

    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
    messageSenderId: process.env.REACT_APP__FIREBASE_MESSAGEING_SENDER ,
    appId: process.env.REACT_APP_FIREBASE_APP_ID


  };

 const config = firebase.initializeApp(firebaseConfig);


export default config.database().ref();