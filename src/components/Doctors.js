import React,{useState,useEffect} from 'react'
import { collection,getDocs } from 'firebase/firestore'
import { db } from '../firebase1';
import Docts from './Docts';
import { Doctors } from './List.js';
import myImage1 from './locat1.jpeg';
import myImage2 from './locat2.jpeg';
import myImage3 from './locat3.jpeg';


function Listdoctors() {
    const [doctors, setDoctors] = useState([]) 
    useEffect(() => {
        getDoctors()
    }, [])
    useEffect(() => {
        console.log(doctors);
    },[doctors])
    function getDoctors() {
        const DoctorCollectionRef = collection(db, 'Doctors')
        getDocs(DoctorCollectionRef).then(response => {


            const doct = response.docs.map(doc => ({
                data: doc.data(),
                id:doc.id,
            }))
            setDoctors(doct)
        }).catch(error => console.log(error.message));
    }

    const [searchkey, setsearchkey] =useState('')
  return (
    <>
      <div className="row my-4 mx-2 text-center">
        <div className="col-md-6">
        <input type='text' className='form-control' style={{padding:'20px'}} placeholder='Search doctors by entering city or specialization' value={searchkey} onChange={(e)=>{setsearchkey(e.target.value.toLowerCase())}} /></div>
        <h1 style={{margin:'10px'}}>Select Your Doctor</h1>
        <h4>According to your City or Speciality.</h4>
      </div>
      
       {/* <div className="row">
        <div className="col-md-3">
            <img  style={{width:'20px', height:'20px'}}src={myImage1} alt=""/>
        </div>
        <div className="col-md-3">
            <img style={{width:'20px', height:'20px'}} src={myImage2} alt=""/>
        </div>
        <div className="col-md-3">
            <img style={{width:'20px', height:'20px'}}src={myImage3} alt=""/>
        </div>
       </div> */}
      <div className="container">
            <div className="row">
        {(Doctors.filter((doctor)=>doctor.city.toLowerCase().includes(searchkey) ||doctor.specialization.toLowerCase().includes(searchkey) ).map((doctors) => {
           return <Docts doct={doctors} />
        })
        )}
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

export default Listdoctors

