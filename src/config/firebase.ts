// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAesfPvTs2qvmDuqVlkhtz6kqvId6F_20Q",
  authDomain: "social-media-5702e.firebaseapp.com",
  projectId: "social-media-5702e",
  storageBucket: "social-media-5702e.appspot.com",
  messagingSenderId: "989412775000",
  appId: "1:989412775000:web:2c1f21fd7f209df667262d",
  measurementId: "G-QM4Z3L4QZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();