// Firebase Configuration
// Project: monitoring-iot-29ac6

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";



const firebaseConfig = {
  apiKey: "AIzaSyCsV4cJ6-YjWmPHw-3Er9ejaV9MFLRMCeQ",
  authDomain: "iot-japfaybar.firebaseapp.com",
  databaseURL: "https://iot-japfaybar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-japfaybar",
  storageBucket: "iot-japfaybar.firebasestorage.app",
  messagingSenderId: "684964497405",
  appId: "1:684964497405:web:71802801163c67b9ca7b94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
