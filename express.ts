import { getDatabase, ref, set, onValue } from "firebase/database";
import {json} from 'body-parser';
import cors from 'cors';
import { response } from 'express';
import { rtdb, chatRoomRef } from "./database";

const express = require('express');
const app = express();
app.use(json());
app.use(cors());


export {app};

///EndPoints///
app.post('', (req, res) => {
    set(ref(rtdb, 'ChatRooms/'), {
       value: 'prueba2'
      });
})

app.get('', (req, res) => {
  res.json();
})

// function main (){

// }

// main ();