import { useState } from "react";

const Payment = () => {
    const [selectedRadio, setSelectedRadio] = useState("");

    const paymentsImagesDir = "./images/payments/"
    const payments = ['visa', 'mastercard', 'amex', 'discover', 'apple-pay', 'google-pay', 'after-pay', 'opay']

    return (
        <section className="payment-info">
            <h3>Step 4</h3>
            <h2>Select Payment Info</h2>

            <div className="payment-box box">
                <form action="" id="payment">
                <div className="payment-section">
                    <input type="radio" name="payment" id="" value='paypal' onChange={(e)=>setSelectedRadio(e.target.value)}/>
                    <p>Pay With</p>
                    <img src={paymentsImagesDir + 'paypal.png'} alt="" />
                </div>
                <div className="payment-section">
                    <input type="radio" name="payment" id="" value='card' onChange={(e)=>setSelectedRadio(e.target.value)}/>
                    <p>Pay With Credit Card</p>
                    <div className="payment-badges">
                        {payments.map((payment) => {return (<img src={paymentsImagesDir + payment + '.png'} alt="" />)})}
                    </div>
                </div>
                </form>
                <div className="credit-card-form">
                    <form className="shipping-form" action="">
                        <label htmlFor=""><p>Name on Card</p><input type="text" name="" id="" disabled={selectedRadio !== "card"}/></label>
                        <label htmlFor=""><p>Expiration Date</p>
                            <select name="" id="" disabled={selectedRadio !== "card"}><option hidden>Year</option></select>
                            <select name="" id="" disabled={selectedRadio !== "card"}><option hidden>Month</option></select>
                        </label>
                        <label htmlFor=""><p>Card Number</p><input type="text" name="" id="" disabled={selectedRadio !== "card"}/></label>
                        <label htmlFor=""><p>Security Code</p><input type="text" name="" id="" disabled={selectedRadio !== "card"}/><a href="">What's This?</a></label>
                    </form>
                </div>
            </div>
            <a><img className="guarantee" src="./images/guarantee.png" alt="" /></a>
        </section>
    )
}

export default Payment