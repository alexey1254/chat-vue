
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyARz6FkutduDBxYgTC5NzaEQL_f-KPFmA4",
  authDomain: "chat-vue-5d9e5.firebaseapp.com",
  projectId: "chat-vue-5d9e5",
  storageBucket: "chat-vue-5d9e5.appspot.com",
  messagingSenderId: "645178765618",
  appId: "1:645178765618:web:ede5b036fdde561f47a72b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {
    auth, db
}