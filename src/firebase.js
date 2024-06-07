
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBdUqgYIOd7tjb3y4tw1nzV1EHnW217S6w",
    authDomain: "dolorescc-3a13f.firebaseapp.com",
    projectId: "dolorescc-3a13f",
    storageBucket: "dolorescc-3a13f.appspot.com",
    messagingSenderId: "253157325730",
    appId: "1:253157325730:web:45be9b6b860a24804650fb",
    measurementId: "G-CSG4VZ592J"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
