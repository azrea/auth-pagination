import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const app = initializeApp({
  apiKey: "AIzaSyDkOls8NDcTZIt27JrZqeu6_mPD6RDQoAQ",
  authDomain: "clone-8bdd6.firebaseapp.com",
  projectId: "clone-8bdd6",
  storageBucket: "clone-8bdd6.appspot.com",
  messagingSenderId: "250945292213",
  appId: "1:250945292213:web:7fa4fd7c8cad15ec98fbfc",
  measurementId: "G-XQMSQGYZ5H",
});

export const auth = getAuth(app);

export default app;
