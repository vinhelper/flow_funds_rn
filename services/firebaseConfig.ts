import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCJeo1skNgED0Z5qVbJsle5-jYsMi7iJrA",
  authDomain: "flow-funds.firebaseapp.com",
  projectId: "flow-funds",
  storageBucket: "flow-funds.firebasestorage.app",
  messagingSenderId: "314451327268",
  appId: "1:314451327268:web:34408c304f384d219c9bb1",
  measurementId: "G-705TSQKY4S",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
