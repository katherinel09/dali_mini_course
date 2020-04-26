import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBEHSW28UmPhFC4jwf5EUFKYQtZrpreMAc",
    authDomain: "brusselsproutsrecipes.firebaseapp.com",
    databaseURL: "https://brusselsproutsrecipes.firebaseio.com",
    projectId: "brusselsproutsrecipes",
    storageBucket: "brusselsproutsrecipes.appspot.com",
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  
  export function addDog(dogName) {
    const dogs = firebase.database().ref('Dogs/');
    dogs.push({
          dogName
    });
}
