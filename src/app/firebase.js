import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyABMGdDpzFjiDMJ_K6o8zpDAFkQmLYAEcY",
    authDomain: "opnium-fbde5.firebaseapp.com",
    databaseURL: "https://opnium-fbde5.firebaseio.com",
    projectId: "opnium-fbde5",
    storageBucket: "opnium-fbde5.appspot.com",
    messagingSenderId: "947637646820"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/posts');
export const role_coll = firebase.database().ref('/roles');
export const authenticateUser = firebase.auth();
export const firebaseDatabase = firebase.database();
export const appUser = firebase.database().ref("/user");
export const feedCron = firebase.database().ref("/cron");
export const feedList = firebase.database().ref("/rssFeedList");
