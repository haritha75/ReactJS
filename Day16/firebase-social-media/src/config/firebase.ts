// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeEKo8TFkXvf2Cu7l8NuQuiCbVsMuOudI",
  authDomain: "react-course-83b0b.firebaseapp.com",
  projectId: "react-course-83b0b",
  storageBucket: "react-course-83b0b.appspot.com",
  messagingSenderId: "760963849513",
  appId: "1:760963849513:web:72c6dd9b849f4c829a6b38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
