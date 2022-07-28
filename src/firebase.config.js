
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAm4ltIuCAYEL5GXo1RULKGUC_KVTXJnps",
    authDomain: "food-app-ece3b.firebaseapp.com",
    databaseURL: "https://food-app-ece3b-default-rtdb.firebaseio.com",
    projectId: "food-app-ece3b",
    storageBucket: "food-app-ece3b.appspot.com",
    messagingSenderId: "340502209335",
    appId: "1:340502209335:web:a975ba245baede8e7bb0b2"
};
  

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };

