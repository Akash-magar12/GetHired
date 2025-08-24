import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4tmcfd5cl_ZbS_neAc2OGHqg0FDb33PM",
  authDomain: "next-step-4508f.firebaseapp.com",
  projectId: "next-step-4508f",
  storageBucket: "next-step-4508f.firebasestorage.app",
  messagingSenderId: "173921396531",
  appId: "1:173921396531:web:d55b455ee3aba2a3690046",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
