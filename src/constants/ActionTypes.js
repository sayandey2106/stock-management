import firebase from "firebase/app";
import "firebase/storage"
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

export const RESET = "RESET";
export const CLEAR_LOGIN = "CLEAR_LOGIN";
export const SET_EMAIL = "SET_EMAIL";
export const SET_NAME = "SET_NAME";
export const SET_PASSWORD = "SET_PASSWORD";
export const LOGIN = "LOGIN";
export const SET_USERNAME = "SET_USERNAME";
export const LOGOUT = "LOGOUT";
export const HANDLEDRAWER = "HANDLEDRAWER";
export const SET_HOME = "SET_HOME";
export const HANDLEDRAWER1 = "HANDLEDRAWER1";
export const OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
export const CLOSE_LOGIN_MODAL = "CLOSE_LOGIN_MODAL";
export const RESET_LOGIN = "RESET_LOGIN";

const firebaseConfig = {
  apiKey: "AIzaSyDHrZ5jINVP41Jlp5kBKAFJXygf3npQM1Y",
  authDomain: "ladies-point.firebaseapp.com",
  projectId: "ladies-point",
  storageBucket: "ladies-point.appspot.com",
  messagingSenderId: "488364916178",
  appId: "1:488364916178:web:1b83fce155e92a9700dc0b",
  measurementId: "G-TECFCZRLH1"
};

// export const app = initializeApp(firebaseConfig);
//  export const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const storage =firebase.storage();

export {storage,firebase as default};