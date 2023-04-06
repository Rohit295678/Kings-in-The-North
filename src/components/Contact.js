import React from 'react'
import {FaInstagram,FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaMailBulk} from 'react-icons/fa'
import './Contact.css'

function Contact() {
  return (
    <>
    <div id="footer" style={{ backgroundColor: '#fff', color: '#ff004f', backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-green-minimalist-medical-nurses-day-banner-background-image_223622.jpg')"}}>
        <div className="container">
        <div className="text-center" style={{color: 'black'}}>
                    <h1 className="sub-title" ><b>Get in Touch</b></h1>
                    <p>Give us your valuable feedback or share any problem you faced while using the website by filling the form</p>
                    </div>    
            <div className="row">
                <div className="contact-right">
                    <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" name="Email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" className="btnn btn2">Submit</button>
                    </form>
                    <span id="msg"></span>
                </div>
                <div className="contact-left my-2" style={{backgroundColor: '#012945',color: '#0ebab1'}}>
                    <p> <FaMailBulk/> raikrishna882000@gmail.com</p>
                    <p><FaPhone/> +917905841571</p>
        
                        <a className='mx-1' style={{color: "#0ebab1", fontSize: '40px'}} href="https://www.facebook.com/profile.php?id=100012132700820"><FaFacebook /></a>
                        <a className='mx-1' style={{color: "#0ebab1",fontSize: '40px'}} href="https://www.instagram.com/__krishna0_8/"><FaInstagram /></a>
                        <a className='mx-1' style={{color: "#0ebab1",fontSize: '40px'}} href="https://twitter.com/krishna82706481"><FaTwitter /></a>
                        <a className='mx-1' style={{color: "#0ebab1",fontSize: '40px'}} href="https://www.linkedin.com/in/krishnaswarooprai/"><FaLinkedin /></a>
                    
                    </div>
                    <div className="contact-left my-2" style={{backgroundColor: '#012945',color: '#0ebab1'}}>
                    <p> <FaMailBulk/> rohitbkpraj@gmail.com</p>
                    <p><FaPhone/> +9123178029</p>
        
                        <a className='mx-1' style={{color: "#0ebab1", fontSize: '40px'}} href="https://www.facebook.com/profile.php?id=100012132700820"><FaFacebook /></a>
                        <a className='mx-1' style={{color: "#0ebab1",fontSize: '40px'}} href="https://www.instagram.com/__krishna0_8/"><FaInstagram /></a>
                        <a className='mx-1' style={{color: "#0ebab1",fontSize: '40px'}} href="https://twitter.com/krishna82706481"><FaTwitter /></a>
                        <a className='mx-1' style={{color: "#0ebab1",fontSize: '40px'}} href="https://www.linkedin.com/in/krishnaswarooprai/"><FaLinkedin /></a>
                    
                    </div>
                    <div className="contact-left my-2" style={{backgroundColor: '#012945',color: '#0ebab1'}}>
                    <p> <FaMailBulk/>nishantraj@gmail.com</p>
                    <p><FaPhone/> +918923679976</p>
        
                        <a className='mx-1' style={{color: "#0ebab1", fontSize: '40px'}} href="https://www.facebook.com/profile.php?id=100012132700820"><FaFacebook /></a>
                        <a className='mx-1' style={{color: "#0ebab1",fontSize: '40px'}} href="https://www.instagram.com/__krishna0_8/"><FaInstagram /></a>
                        <a className='mx-1' style={{color: "#0ebab1",fontSize: '40px'}} href="https://twitter.com/krishna82706481"><FaTwitter /></a>
                        <a className='mx-1' style={{color: "#0ebab1",fontSize: '40px'}} href="https://www.linkedin.com/in/krishnaswarooprai/"><FaLinkedin /></a>
                    
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

export default Contact
