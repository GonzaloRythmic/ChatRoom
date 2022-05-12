import { json } from "body-parser";
import { Message } from "firebase-admin/lib/messaging/messaging-api";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { chatRoomRef, rtdb } from "../database";

const API_URL_BASE = 'http://localhost:3000/'
type Messages = {
    name: string,
    message: string;
  }

const state = {
    data: {
        name: '',
        message: []
    },
    listener: [], 
    // Initializer
    init() {
       const messageChatRoomRef = ref(rtdb, 'ChatRoom/Room_1')
       onValue(messageChatRoomRef, (snapshot) => {
        const messagesFromServer = snapshot.val();
        console.log(messagesFromServer);
       })
     
    },
    getState(){
        return this.data;
    },


    setName(name){
        const currentState = this.getState();
        currentState.name = name;
        const newState = this.setState(currentState);
        console.log('Soy el state y me han agregado esto:', name)
        console.log('Asi queda el nuevo estado', currentState);
    },
   
    pushMessage(message: string) {
       fetch(API_URL_BASE + '/messages', {
           method: 'post',
           body: JSON.stringify({
               name: this.data.nombre,
               message: message
           })
       })
    },

    setState(newState) {
        this.data = newState;

        // Save the changes made to the state
        // localStorage.setItem('New State', JSON.stringify(this.data));

        for (const cbFunction of this.listener) {
            cbFunction(newState);
        }
    },

    
    suscribe(callback: (any)=> any ){   //recibe una función (callback)
        this.listener.push(callback);   //agrega lo que tiene que hacer el listener. 
        for (const cb of this.listener) {
            cb();
        }
    },
    

    // Delete task method
    deleteTask(taskId: string) {
        // Get the current state
        const currentState = this.getState();

        // Find the task that needs to be deleted
        const foundTask = currentState.tasks.find(
            (t) => t.id == parseInt(taskId)
        );

        // Change the task deleted property
        foundTask.deleted = true;

        this.setState(currentState);
    },
    changeItemStatus(id: string, value: boolean) {
        // Get the current state
        const currentState = this.getState();

        // Find the task that needs to be changed
        const foundTask = currentState.tasks.find((t) => t.id == parseInt(id));

        // Change the task property
        foundTask.completed = value;

        this.setState(currentState);
    },
};

export {state};
