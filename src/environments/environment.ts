// Import the functions you need from the SDKs you need

import { initializeApp } from "@angular/fire/app";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

export const firebaseConfig = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCIRWwb37rYyaPkV-09Ahwo7BJF3EsS3NA",
    authDomain: "notes-king-1f320.firebaseapp.com",
    projectId: "notes-king-1f320",
    storageBucket: "notes-king-1f320.appspot.com",
    messagingSenderId: "79221723072",
    appId: "1:79221723072:web:c90e6210840822ab71c225"
  }
};


// Initialize Firebase

const app = initializeApp(firebaseConfig.firebase);