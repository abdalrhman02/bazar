import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAO47VtN_iVnJihCsVvcO4ubNF3fwjIETM",
  authDomain: "bazar-d0b64.firebaseapp.com",
  projectId: "bazar-d0b64",
  storageBucket: "bazar-d0b64.appspot.com",
  messagingSenderId: "336835667618",
  appId: "1:336835667618:web:ec014f2a2173906881d9fb",
  measurementId: "G-KNKH36E624"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fst = getFirestore(app);
const storage = getStorage(app);

export {app,auth,fst,storage}