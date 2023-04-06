import React from 'react'
import './Book1.css'
import { Link } from 'react-router-dom'

function Book() {
  return (
   <>
<div className="body12">
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
                                Invoice #: 123 <br/>
                                Created: April 5, 2023 <br/>
                            </td>
                        </tr>
                    </table>
                         
                </td>
            </tr>

            <tr className="Information">
                <td colspan="2">
                   
                    <table>
                        <tr>
                            <td>
                                Doctor Name:Dr Vikash Patel <br/>
                                Phone: +914114141421 <br/>
                            </td>
                            <td>
                                Specialist: Ophthalmologist <br/>
                                Email: patelvikash@gmail.com
                            </td>
                        </tr>
                    </table>
                </td>

            </tr>

            <tr className="heading">
                <td>
                    Payment Method
                </td>
                <td>Check #</td>
            </tr>

            <tr className="details">
                <td>Check</td>
                <td>1000</td>
            </tr>
            <tr className="heading">
                <td>Item</td>
                <td>Price</td>
            </tr>
            <tr className="item">
                <td>Treatment</td>
                <td>10 Minutes</td>
            </tr>
        </table>
        <button type="Pay" className="btn"><Link to='/access'style={{textDecoration:'none', color:'white'}}>PAY</Link></button>
    </div>
    <div className="container12">
        <div className="popup" id="popup">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-KaA8G3AcmLW0I-wUh8RfslOZ45z-tohYCLaYX0EMhMtDvFAJ9BSh4l7JVHrreWjg7o&usqp=CAU" alt=""/>
            <h2>Thank You!</h2>
            <h5>Your Appointment has been scheduled.<br/>Thanks!</h5>
            <button type="button">OK</button>
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
  )
}

export default Book
