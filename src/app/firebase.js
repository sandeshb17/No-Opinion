import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAFEA78RgiDLtHyjisOWQ9glcbVepFJufM",
    authDomain: "noopinion-5cbbe.firebaseapp.com",
    databaseURL: "https://noopinion-5cbbe.firebaseio.com",
    projectId: "noopinion-5cbbe",
    storageBucket: "",
    messagingSenderId: "138266627420"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/posts');
export const role_coll = firebase.database().ref('/roles');
export const authenticateUser = firebase.auth();
export const firebaseDatabase = firebase.database();
export const appUser = firebase.database().ref("/user");
export const feedCron = firebase.database().ref("/cron");
export const feedList = firebase.database().ref("/rssFeedList");

