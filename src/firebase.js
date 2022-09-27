import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAon2Jdus2cRcR99fBjgGeOBhohso8bi10",
    authDomain: "line-clone-4c25d.firebaseapp.com",
    projectId: "line-clone-4c25d",
    storageBucket: "line-clone-4c25d.appspot.com",
    messagingSenderId: "203246569007",
    appId: "1:203246569007:web:a26b2c910f0bc679ee28da"
});
//firebaseのfireStoreで情報を管理
const db = firebaseApp.firestore();
//firebaseのauth機能で認証機能を管理
const auth = firebase.auth();

export { db, auth }; 