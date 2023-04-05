import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

    

    const firebaseConfig = {
        apiKey: "AIzaSyAVS0-b0HcDOlbsfoHB_ynoniDvqMrCI4A",
        authDomain: "hackathon-5df4d.firebaseapp.com",
        projectId: "hackathon-5df4d",
        storageBucket: "hackathon-5df4d.appspot.com",
        messagingSenderId: "778945558087",
        appId: "1:778945558087:web:1f7cd396cd4a00c030a362",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
  
 export { app, auth };
