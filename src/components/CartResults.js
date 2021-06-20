const cartResults = ({upsellState, shippingPrice}) => {
    const packPrice = 30;
    const upsellMultiplier = 3;
    const discountPercentage = 0.1;

    function subtotalValue() {
        return (upsellState ? (packPrice * upsellMultiplier) * (1 - discountPercentage) : packPrice).toFixed(2)
    }

    function shippingPriceValue() {
        return parseFloat(shippingPrice).toFixed(2)
    }

    function totalValue() {
        return (parseFloat(subtotalValue()) + parseFloat(shippingPrice)).toFixed(2);
    }

    return (
        <section className="cart-results">
            <div className="product-image">
                <img src="./images/product.png" alt="" />
                <div className="free-shipping-badge">
                    <img src="./images/delivery-truck.svg" alt="" />
                    <p>FREE SHIPPING</p>
                </div>
            </div>
            <div className="results box">
                <div className="result-rows">
                    <div className="result-row">
                        <div className="field-name">Subtotal</div>
                        <div className="spacer"></div>
                        <div className="field-value">{subtotalValue()}$</div>
                    </div>
                    <div className="result-row">
                        <div className="field-name">Shipping</div>
                        <div className="spacer"></div>
                        <div className="field-value">{shippingPriceValue()}$</div>
                    </div>
                    <div className="result-row total">
                        <div className="field-name">Total</div>
                        <div className="spacer"></div>
                        <div className="field-value">{totalValue()}$</div>
                    </div>
                </div>
                <div className="note">
                    <p>Note: The charge will appear on your card as CuraLife</p>
                </div>
            </div>
        </section>
    )
}

export default cartResults