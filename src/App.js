import Header from './components/Header'
import TrustBadges from './components/TrustBadges'
import CartResults from './components/CartResults'
import Upsell from './components/Upsell'
import BillingInfo from './components/BillingInfo'
import ShippingInfo from './components/ShippingInfo'
import ShippingMethod from './components/ShippingMethod'
import PaymentInfo from './components/PaymentInfo'
import Footer from './components/Footer'

import { useState } from "react";


function App() {
  const [upsellState, setUpsellState] = useState(false);
  const [shippingPrice, setShippingPrice] = useState(10);

  const UpsellChange = (isChecked) => {
    setUpsellState(isChecked)
    console.log(upsellState);
  }

  const ShippingChange = (price) => {
    setShippingPrice(price)
    console.log(shippingPrice);
  }

  return (
    <div className="app">
      <Header title="CERTIFIED 100% SAFE & SECURE CHECKOUT"/>
      <div className="container">
        <TrustBadges/>
        <h1 className="page-title">What we’ll ship you today</h1>
        <CartResults upsellState={upsellState} shippingPrice={shippingPrice}/>
        <Upsell onUpsellChange={UpsellChange} upsellState={upsellState}/>
        <div className="forms">
          <BillingInfo/>
          <ShippingInfo/>
        </div>
        <div className="shipping-select forms">
          <ShippingMethod onShippingChange={ShippingChange}/>
        </div>
        <div className="payment-info forms">
          <PaymentInfo/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;