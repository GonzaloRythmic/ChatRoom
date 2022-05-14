
import './src/Pages/homepage';
import './src/Pages/chatpage';
import {Router} from '@vaadin/router';
// import {v4 as uuidv4} from 'uuid';
import { rtdb } from "./database";
import { state } from './src/state';
 

function main () {
  state.init();
}
main()