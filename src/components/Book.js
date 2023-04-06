import React from 'react'
import './Book1.css'

function Book() {
  let popup=document.getElementById("popup");

    function openPopup()
    {
        popup.classNameList.add("open-popup");
    }
    function closePopup()
    {
        popup.classNameList.remove("open-popup");
    }
  
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
                                Doctor Name:Dr Singhania <br/>
                                Phone: +914114141421 <br/>
                            </td>
                            <td>
                                Specialist: Cardiology <br/>
                                Email: Singhania@gmail.com
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
        <button type="Pay" className="btn" onclick="openPopup()">PAY</button>
    </div>
    <div className="container12">
        <div className="popup" id="popup">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-KaA8G3AcmLW0I-wUh8RfslOZ45z-tohYCLaYX0EMhMtDvFAJ9BSh4l7JVHrreWjg7o&usqp=CAU" alt=""/>
            <h2>Thank You!</h2>
            <h5>Your Appointment has been scheduled.<br/>Thanks!</h5>
            <button type="button" onclick="closePopup()">OK</button>
        </div>
    </div>
    </div>

  </>
  )
}

export default Book