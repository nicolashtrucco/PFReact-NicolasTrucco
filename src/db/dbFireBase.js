// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0W_6QtU2Vg80ABMOPVYLeKOYQpreEre8",
  authDomain: "blockbuster-56503.firebaseapp.com",
  projectId: "blockbuster-56503",
  storageBucket: "blockbuster-56503.appspot.com",
  messagingSenderId: "921456167839",
  appId: "1:921456167839:web:ec02a21e83494b8bef0baa"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;