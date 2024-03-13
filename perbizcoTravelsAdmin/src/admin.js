//Firebase imports
import { initializeApp } from "firebase/app";
import {
  getDocs,
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDOh048Gk5k_SNlGNEZ-G-nElNTqtVOa4w",
  authDomain: "perbizco-travels.firebaseapp.com",
  projectId: "perbizco-travels",
  storageBucket: "perbizco-travels.appspot.com",
  messagingSenderId: "198261997758",
  appId: "1:198261997758:web:0b42f4657a36b9ce795eef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
//get client collection
const clients = collection(db, "clients")
getDocs(clients)
  .then((snapshot) => {
    let docs = []
    snapshot.forEach((doc) => {
      let data = doc.data();
      const id = doc.id;
      let row = `<tr id="${'table'+id}">
                    <td>${data.name}</td>
                    <td>${data.phone}</td>
                    <td>${data.startingPoint}</td>
                    <td>${data.destination}</td>
                    <td>${data.email}</td>
                    <td>${data.dateTime}</td>
                    <td>${id}</td>
                    <td><button class="btn btn-secondary" id="${'delete'+ id}">Delete</button></td>
                    <td><button class="btn btn-primary" id="${'bill'+ id}">Bill</button></td>
                </tr>`;
      
      docs.push(id)
      let table = document.getElementById("myTable");
      table.innerHTML += row;
    });
    docs.forEach((id) => {
      document.getElementById("delete" + id).addEventListener("click",()=>{
        deleteDoc(doc(db,"clients",id))
        window.location.reload;
      })
      document.getElementById("delete" + id).addEventListener("touchstart",()=>{
        deleteDoc(doc(db,"clients",id))
        window.location.reload;
      })
      document.getElementById("bill" + id).addEventListener("click",()=>{
        let billingID =  id;
        if (billingID != false){
          window.location.replace("./src/bill.html");
          console.log(billingID);
        };
      })
      document.getElementById("bill" + id).addEventListener("touchstart",()=>{
        console.log("hi")
      })
    })
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });