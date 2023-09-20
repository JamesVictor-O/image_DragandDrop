
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD3H1w4rqZ-flYgUw9WqF8oZJ4mN-e0iKA",
  authDomain: "imagednd-409d6.firebaseapp.com",
  projectId: "imagednd-409d6",
  storageBucket: "imagednd-409d6.appspot.com",
  messagingSenderId: "714492807882",
  appId: "1:714492807882:web:0d4ca42e6b78c199b34233"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export auth = getAuth(app);

export signIn=signInWithEmailAndPassword(auth,ema)
