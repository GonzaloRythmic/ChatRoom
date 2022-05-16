
import './src/Pages/homepage';
import './src/Pages/chatpage';
// import {v4 as uuidv4} from 'uuid';
import { rtdb } from "./database";
import { state } from './src/state';
import './src/router'
 

function main () {
  state.init();
}
main()