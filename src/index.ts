import  *as express from "express";
import {firestore, rtdb} from './db';
import {json} from 'body-parser';
import {v4 as uuidv4} from 'uuid';
import *as cors from 'cors';
import { app } from 'firebase-admin';
import { initRouter } from './router';
import { state } from './state';
 



function main () {
  // console.log("Soy la rtdb",rtdb, 'Soy el firestore', firestore);
  // state.init();
  // state.setEmailAndFullName({email: 'AVB@prueba.com', fullname:'AS', message: 'Chau'});
  
const app = express()
const port = 3000
console.log(app);
  // app.use(json());
  // app.use(cors());
  
  app.get('/', (req, res) => {
    res.json('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

}
main()