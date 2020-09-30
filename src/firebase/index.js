import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAfONUk8Eemnyp-_TPIKfpPxyv759gth3I",
    authDomain: "prueba-d203e.firebaseapp.com",
    databaseURL: "https://prueba-d203e.firebaseio.com",
    projectId: "prueba-d203e",
    storageBucket: "prueba-d203e.appspot.com",
    messagingSenderId: "925829361464",
    appId: "1:925829361464:web:b04fb0ba02fb139c081bcd",
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}