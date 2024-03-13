import emailjs from 'emailjs-com';
//Firebase imports
import { initializeApp } from "firebase/app";
import {getDocs, getFirestore,collection, onSnapshot, addDoc} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDOh048Gk5k_SNlGNEZ-G-nElNTqtVOa4w",
  authDomain: "perbizco-travels.firebaseapp.com",
  projectId: "perbizco-travels",
  storageBucket: "perbizco-travels.appspot.com",
  messagingSenderId: "198261997758",
  appId: "1:198261997758:web:0b42f4657a36b9ce795eef"
};

// Initialize Firebase
emailjs.init('gIWtW35tnvCnNzw4m')
const app = initializeApp(firebaseConfig);
const db = getFirestore();
//get client collection
const clients = collection(db, "clients")
//Add data
const bookingForm = document.getElementById("booking-form")
bookingForm.addEventListener('submit',  (e) =>{
    e.preventDefault();
    addDoc(clients,{
        name : bookingForm.name.value,
        phone : bookingForm.phone.value,
        startingPoint : bookingForm.startingPoint.value,
        destination : bookingForm.destination.value,
        email : bookingForm.email.value,
        dateTime : bookingForm.dateTime.value,
    })
    .then(
      () => {bookingForm.reset()}
    )
 
    // emailjs.send("service_z4hh0v8","template_ka435pj")
    // .then(() => {console.log("emailsent")})
    // .catch((err) => {console.log(err)})
})
