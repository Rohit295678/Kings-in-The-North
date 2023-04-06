import React from 'react'
import './Book1.css'
import './docard.css'

function AppointmentList() {
  return (
    <>
    <div style={{backgroundImage:"url('https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-green-minimalist-medical-nurses-day-banner-background-image_223622.jpg')"}}>
    <div className="body12" style={{marginBottom:"70px",marginTop:'0px'}}>
    <div className="Invoice-Box">
        <table cellpadding="0" cellspacing="0">
            <tr className="top">
                <td colspan="2">

                    <table>
                        <tr>
                            <td>
                                <h4 >Your Appointment</h4>
                            </td>
                            <td>
                                Created: April 5, 2023
                            </td>
                        </tr>
                    </table>
                         
                </td>
            </tr>
            </table>
            <div className="row">
            <div className="col-md-6">
            <h4>Doctor Details</h4>
            <div className="container127">
        <div className="row">
<div className="animate">
    <div className="card shadow"style={{width:'18rem'}}>
        <div className="inner">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67PX2nlSthweqmeu2Ri2W5akTfkaJXulG0A&usqp=CAU" 
            className="card-img-top" alt=""/>
        </div>
       
        <div className="card-body text-center">
          <h4 className="card-title">Dr. Vikash Patel</h4>
          <h5 className="card-text">Ophthalmologist</h5>
          <h6>Ahemdabad</h6>
        
        </div>
      </div>
</div>

        </div>
    </div>
        </div>
            
        <div className="col-md-6">
          <h4 style={{marginLeft:'80px'}}>Patient Details</h4>
          <br/>
          <h2 style={{marginLeft:'80px'}}>Name: xyz <br /><br /></h2>
          <h6 style={{marginLeft:'80px'}}>Age: 26years</h6>
          <h6 style={{marginLeft:'80px'}}>Gender: male <br /></h6>
          <h4 style={{marginLeft:'80px'}}>Time slot: 11:00 to 11:10 AM</h4>
          <h6></h6>
        </div>
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
 </div>
    </>
  )
}

export default AppointmentList
