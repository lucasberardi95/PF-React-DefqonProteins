import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtAigsv33LWdOBGINJ1S2QyhBaEAM-tGQ",
    authDomain: "defqon-proteins.firebaseapp.com",
    projectId: "defqon-proteins",
    storageBucket: "defqon-proteins.appspot.com",
    messagingSenderId: "79026097941",
    appId: "1:79026097941:web:bf001df29053ce703b231c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
