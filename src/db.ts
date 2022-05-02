import { initializeApp } from 'firebase/app';
import *as admin from 'firebase-admin'
import { getDatabase, ref, onValue } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "'w52IIbHhAc4BgvzJJennld8PDMvQsvqkRK0nSMcM'",
    authDomain: "dwf-mod6-333cf.firebaseapp.com",
    databaseURL: 'https://dwf-mod6-333cf-default-rtdb.firebaseio.com/',
    projectId: 'dwf-mod6-333cf',
};
  
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); //Get a reference to firestore database. 
const rtdb = getDatabase(app); // Get a reference to the  real time database service

export {rtdb, firestore}



  