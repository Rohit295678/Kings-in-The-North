import React,{useState} from "react";

import { collection,addDoc } from "firebase/firestore";
import { db } from "../firebase1";

import styles from'./Login.module.css';
import { Link } from "react-router-dom";
function Login() {
    const [name, SetName] = useState("");
    const [age, SetAge] = useState("");
    const [time, SetTime] = useState("");
    const [date, SetDate] = useState("");
     function handleSubmit(e) {
       e.preventDefault();
       if (name == "") {
         return;
       }
       const doctorsCollectionRef = collection(db, "Doctors");
       addDoc(doctorsCollectionRef, { name, age, time, date })
         .then((response) => {
           console.log(response);
         })
         .catch((error) => {
           console.log(error.message);
         });
     }
   
  return (
    <>
      <div className={styles.container} style={{marginBottom:'20px'}}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Appointment Details</h1>
          <h4>Add Name</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => SetName(e.target.value)}
            />
            <button
              type="submit"
              style={{
                color: "white",
                borderRadius: "5px",
                background: " #9900ff",
                marginLeft: "10px",
              }}
            >
              Add Name
            </button>
          </form>
          <form onSubmit={handleSubmit}>
            <label>Date</label>
            <input
              className={styles.container1}
              id="date"
              type="date"
              value={date}
              onChange={(e) => SetDate(e.target.value)}
            />
            <button
              type="submit"
              style={{
                color: "white",
                borderRadius: "5px",
                background: " #9900ff",
                marginLeft: "10px",
              }}
            >
              Add Date
            </button>
          </form>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Age">Age</label>
            <input
              id="age"
              type="Number"
              value={age}
              onChange={(e) => SetAge(e.target.value)}
            />
            <button
              type="submit"
              className="enter"
              style={{
                color: "white",
                borderRadius: "5px",
                background: " #9900ff",
                marginLeft: "10px",
              }}
            >
              Add age
            </button>
          </form>
          <form>
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => SetTime(e.target.value)}
            />
            <button
              type="submit"
              style={{
                color: "white",
                borderRadius: "5px",
                background: " #9900ff",
                marginLeft: "10px",
              }}
            >
              Add Time
            </button>
          </form>
          <div className={styles.footer}>
            <b className={styles.error}></b>
            <button type="submit"><Link to='/payment' style={{textDecoration:'none',color:'whitesmoke'}}>Book Appointment</Link></button>
          </div>
        </div>
      </div>
      <footer className="text-light" style={{backgroundColor: 'black'}}>
  <div className="container py-3">
    <div className="row">
      <div className="col-md-4 my-2">
        <h5>Company</h5>
        <p>About Us</p>
        <p>Careers</p>
      </div>
      <div className="col-md-4 my-2">
        <h5>Need Help?</h5>
        <p>Visit HelpCenter</p>
        <p>Share Feedback</p>
      </div>
      <div className="col-md-4 my-2">
        <h5>View Website in</h5>
        <p>English</p>
      </div>
    </div>
    <hr/>
    <p className="text-center">Copyright &copy; 2023.All Rights Are Reserved</p>
    <span className="text-center mx-2">Term of Use</span>
    <span className="text-center mx-2">Private Policy</span>
    <span className="text-center mx-2">FAQ</span>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZaypJ9gLlWdjgFSFIETDdx0AnWZdE5mRoQ&usqp=CAU' style={{marginLeft: '90%',width: '15%',height: '15%'}} alt=''/>


  </div>
</footer>
    </>
  );
}

export default Login
