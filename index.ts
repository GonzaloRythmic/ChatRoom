

import {v4 as uuidv4} from 'uuid';
import *as cors from 'cors';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { firebaseApp } from "./database";
import { appExpress } from './express';
 
  // const appExpress = express()
  // appExpress.use(json());
  const port = 3000


function main () {
  //Referencia a la RealTimeDataBase//
  const realTimeDataBase = getDatabase(firebaseApp);

  //Set an atribute to the rtdb//
  // set(ref(realTimeDataBase, 'ChatRoom/Room_1'), {  //el atributo .set() setea a "keys" ya existentes. 
  //  nombre: "prueba número 2"
  // });

  //Read data from rtdb//
  const rtdbRef = ref(realTimeDataBase, 'ChatRoom/Room_1');
  onValue(rtdbRef, (snapshot) => {
  const data = snapshot.val();
  console.log('Soy la data de la realTimeDataBase', data);
  })
  
  appExpress.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

}
main()