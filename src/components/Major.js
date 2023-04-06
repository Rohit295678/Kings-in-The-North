import React from "react";
import "./Main.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import InjectCheckout from "./CardComponent";

const stripePromise = loadStripe(
  "pk_test_51Mtl31SA7MEtTjaYWAAi1ZTz9R88wsSnFil9HekP47kDoN563ooQVzTZ8ZXin8GQ6UEXRCWQFpPkNHqUQ0QtG71E00wnweXdNj"
);

function Main() {
  console.log(stripePromise);
  return (
    <>
    <div className="Appbody" style={{marginTop:'100px'}}>
      <div className="product">
        <Elements stripe={stripePromise}>
          <InjectCheckout />
        </Elements>
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

export default Main;
