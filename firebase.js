import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbPZsjEf1QUeOyE6SONn-WuhGMCxEWX28",
  authDomain: "health-insurance-a18e6.firebaseapp.com",
  projectId: "health-insurance-a18e6",
  storageBucket: "health-insurance-a18e6.appspot.com",
  messagingSenderId: "24387761231",
  appId: "1:24387761231:web:6a506f1716150297fee63a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
