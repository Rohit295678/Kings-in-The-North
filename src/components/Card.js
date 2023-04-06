import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './card.css'
function card() {
  return (
    
    <div className="row">
      
        <div className="container2 col-md-4" >
          <div className="box2">
            <span></span>
            <div className="content2">
              <h2 className="about">About Our Project</h2>
              <iframe
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="contain col-md-4">
        <h2 style={{color:'blue'}}>About Us</h2>
                    <h3 style={{color:'grey'}}>Discover Our Team's Story</h3>
                    <p>We are a team if passionate individuals who are dedicated to providing
                        high-quality products and services to our coustomers. Our company was founded in 
                        2022 with the mission of making people's lives easier and more enjoyable. Since
                         then, we have been working hard to develop innovation solutions that meet the 
                         needs of our customers.
                    </p>
        </div>
      
    </div>
  );
}

export default card
