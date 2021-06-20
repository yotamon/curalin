const shipping = () => {
    return (
        <div className="shipping-info">
            <h3>Step 2</h3>
            <h2>Enter Shipping Info</h2>
            <form className="shipping-form" action="">
                <label htmlFor="">First Name<input type="text" name="" id="" /></label>
                <label htmlFor="">Last Name<input type="text" name="" id="" /></label>
                <label htmlFor="">Address<input type="text" name="" id="" /></label>
                <label htmlFor="">Address 2<input type="text" name="" id="" /></label>
                <label htmlFor="">City<input type="text" name="" id="" /></label>
                <label htmlFor="">Zip/Postal<input type="text" name="" id="" /></label>
                <label htmlFor="">Country
                    <select name="" id="">
                        <option value="il">Israel</option>
                        <option value="uk">United Kingdom</option>
                        <option value="usa">United States</option>
                    </select>
                </label>
                <label htmlFor="">State/Province
                    <select name="" id="">
                    </select>
                </label>
            </form>
        </div>
    )
}

export default shipping