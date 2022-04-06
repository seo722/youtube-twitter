import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaHRzsKMm6c2SLJ7rd8e3Yqp2--rBM3Qo",
  authDomain: "twitter-fb0a1.firebaseapp.com",
  projectId: "twitter-fb0a1",
  storageBucket: "twitter-fb0a1.appspot.com",
  messagingSenderId: "527111951852",
  appId: "1:527111951852:web:a85985dbed462383689cc9",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
