import React,{useState} from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Docts({doct}) {
  
  return (
    <>
     <div className="body mx-4 row"> 
    <div className="container1 col-md-6">
            <div className="card1">
              <div className='box1'>
               <div className="image"><img key={doct.id} src={doct.photo}/></div>

               </div>
   
        <h3 className="pad" ><li style={{listStyle: 'none'}} key={doct.id}>{doct.name}</li></h3>
        <h4 className="pad1"><li style={{listStyle: 'none'}} key={doct.id}>{doct.city}</li></h4>
        <h4 className="pad2"><li style={{listStyle: 'none'}} key={doct.id}>{doct.specialization}</li></h4>
        </div>
       
    </div>
     <div className="col-md-6 my-2"><li style={{listStyle: 'none'}} key={doct.id}><strong>{doct.description}</strong></li>
     <div className="row"><div className="col-md-4 mx-4"><button className='but'><a href="https://medsurgeindia.com/doctor/dr-vivek-jawali/" target='blank' style={{textDecoration: 'none',color:'white'}}>Read More</a>
     </button></div><div className="col-md-4"><button className='but' ><Link to= '/booking'style={{textDecoration:'none', color:'white'}}>Make Appointment</Link>
     </button>
     </div>
     </div>
     </div>
    </div>
    
    </>
  )
}

export default Docts

