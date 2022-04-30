import { rtdb } from "./db";
import { getDatabase, ref, onValue } from "firebase/database";

//We listen whith this
const chatRoomRef = ref(rtdb,'/ChatRooms');
console.log("soy el chatroomref",chatRoomRef );
onValue(chatRoomRef, (snapshot) => {
  const data = snapshot.val();
  console.log(snapshot.val());
});
