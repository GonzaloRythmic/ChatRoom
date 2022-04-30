import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "'w52IIbHhAc4BgvzJJennld8PDMvQsvqkRK0nSMcM'",
    authDomain: "dwf-mod6-333cf.firebaseapp.com",
    databaseURL: 'https://dwf-mod6-333cf-default-rtdb.firebaseio.com/',
    projectId: 'dwf-mod6-333cf',
};
  
const app = initializeApp(firebaseConfig);

const rtdb = getDatabase(app); // Get a reference to the database service

export {rtdb}



  