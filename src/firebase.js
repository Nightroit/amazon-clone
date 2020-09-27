var firebase = require('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyBb1OruAtK69IFrgPXEO1H5scRsSRHlbNI",
    authDomain: "clone-16159.firebaseapp.com",
    databaseURL: "https://clone-16159.firebaseio.com",
    projectId: "clone-16159",
    storageBucket: "clone-16159.appspot.com",
    messagingSenderId: "110667118420",
    appId: "1:110667118420:web:6c34dd764d7397ac52fac1",
    measurementId: "G-N5JPWC4MNK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();