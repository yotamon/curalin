const method = ({onShippingChange}) => {
    return (
        <section className="shipping-method">
            <h3>Step 3</h3>
            <h2>Select Shipping Method</h2>
            <form className="shipping-form" action="">
                <label htmlFor="">Shipping
                    <select name="" id="" onChange={(e)=>onShippingChange(e.target.value)}>
                        <option value="10">Regular</option>
                        <option value="20">E-Packet</option>
                        <option value="50">Express</option>
                    </select>
                </label>
            </form>
        </section> 
    )
}

export default method