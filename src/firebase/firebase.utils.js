import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB2_PgC7EotrgiRwlrBpL1GpdTG9ujRSJw",
    authDomain: "crwn-db-a59b5.firebaseapp.com",
    databaseURL: "https://crwn-db-a59b5.firebaseio.com",
    projectId: "crwn-db-a59b5",
    storageBucket: "crwn-db-a59b5.appspot.com",
    messagingSenderId: "92043757",
    appId: "1:92043757:web:c88fff55fc4d044b79cfe4",
    measurementId: "G-DL9FCC35HC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
