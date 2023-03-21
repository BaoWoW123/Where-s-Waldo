import {initializeApp} from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbDhvYwdV1re-f3dze_XRuZ711JfQ2KII",
  authDomain: "whereswaldo-29041.firebaseapp.com",
  projectId: "whereswaldo-29041",
  storageBucket: "whereswaldo-29041.appspot.com",
  messagingSenderId: "952282890509",
  appId: "1:952282890509:web:18f86fa9a16c85304c3044"
};
const app = initializeApp(firebaseConfig)
// const db = getDatabase(app)
export default getFirestore(app);


