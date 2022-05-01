import { rtdb } from "./db";
import { getDatabase, ref, onValue, set} from "firebase/database";
 
function main () {

function readData (rtdb) {
  const chatRoomRef = ref(rtdb, 'ChatRoom/Room_1');
  onValue(chatRoomRef, (snapshot) => {
    const data = snapshot.val();
    console.log(snapshot, data);
  })
};

// function writeData (userId, name, email, imageUrl) {
//   const chatRoomRef = ref(rtdb, '/ChatRooms');
//   set(ref(rtdb, 'ChatRoom/Room_1'), {
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
// }

readData(rtdb);
// writeData(1235, 'Alex', 'alex@hotmail.com', '');

}
main();

