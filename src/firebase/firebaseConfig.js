import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2Od8o9oVTaWTYJ2_GotbIhkfd65V7lpY",
  authDomain: "mock-d7178.firebaseapp.com",
  projectId: "mock-d7178",
  storageBucket: "mock-d7178.appspot.com",
  messagingSenderId: "492134973776",
  appId: "1:492134973776:web:9281c38bc6b00fa34fec55"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };