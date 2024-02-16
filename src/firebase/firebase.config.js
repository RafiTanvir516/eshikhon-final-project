import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHgyWjwZzk4LZxnLzrzYYSyV_Sp3ldl_k",
  authDomain: "final-mern-assignment.firebaseapp.com",
  projectId: "final-mern-assignment",
  storageBucket: "final-mern-assignment.appspot.com",
  messagingSenderId: "571919003522",
  appId: "1:571919003522:web:c42a942b8737a2ece1e99b",
  measurementId: "G-9PYZ7HZJFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
