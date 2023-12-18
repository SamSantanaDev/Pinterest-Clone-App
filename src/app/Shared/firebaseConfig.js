// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-WmIGGu8cKgk6LHWAM3WjfcrNB4uorvo",
  authDomain: "pinterest-clone-408205.firebaseapp.com",
  projectId: "pinterest-clone-408205",
  storageBucket: "pinterest-clone-408205.appspot.com",
  messagingSenderId: "270102096850",
  appId: "1:270102096850:web:aad5540058f945fa1c360b",
  measurementId: "G-BJJN5J8BKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;