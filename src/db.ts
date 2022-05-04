import *as admin from "firebase-admin";
import *as serviceAccount from "./serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://dwf-mod6-333cf-default-rtdb.firebaseio.com"
});

const firestore = admin.firestore();
const rtdb = admin.database();





  