// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ILo08N2hmZpESUJ6OM4PjdQxD8iHzOo",
  authDomain: "red-onion-foods-2e70f.firebaseapp.com",
  projectId: "red-onion-foods-2e70f",
  storageBucket: "red-onion-foods-2e70f.appspot.com",
  messagingSenderId: "466477392504",
  appId: "1:466477392504:web:bbc30c76242dec192b438d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;