import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuerxmWzUNALjbX_sx77YZkd3-EKb0Zx8",
  authDomain: "summarist-project-61a58.firebaseapp.com",
  projectId: "summarist-project-61a58",
  storageBucket: "summarist-project-61a58.firebasestorage.app",
  messagingSenderId: "466255555508",
  appId: "1:466255555508:web:247724a051edffa13f60e1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
