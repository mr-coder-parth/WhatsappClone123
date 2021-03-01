// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCND29TPhVeRPxQKdlp_aYphvVJMcicphw",
    authDomain: "chat123-e79d4.firebaseapp.com",
    projectId: "chat123-e79d4",
    storageBucket: "chat123-e79d4.appspot.com",
    messagingSenderId: "887235174254",
    appId: "1:887235174254:web:4a77fd8d6850ed82882b7f",
    measurementId: "G-1XT09J30TE"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;