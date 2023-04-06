import {
  ElementsConsumer,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import React, { Component } from "react";
import CardSection from "./CardSection";
import { Link } from "react-router-dom";
class CardComponent extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const stripe = useStripe();
    const elements = useElements();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    }
  };

  render() {
    return (
      <div className="cardContainer">
        <form onSubmit={this.handleSubmit}>
          <CardSection></CardSection>
          <button disabled={!this.props.stripe} className="btn-pay" >
            <Link to="/appointment" style={{textDecoration:'none', color:'white'}}>Pay Now</Link>
          </button>
        </form>
      </div>
      
    );
  }
}
export default function InjectCheckout() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CardComponent stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
