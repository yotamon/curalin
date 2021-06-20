const billing = () => {
    return (
        <div className="billing-info">
            <h3>Step 1</h3>
            <h2>Enter Billing Info</h2>
            <form className="billing-form" action="">
                <label htmlFor="">First Name<input type="text" name="" id="" /></label>
                <label htmlFor="">Last Name<input type="text" name="" id="" /></label>
                <label htmlFor="">Best Phone<input type="text" name="" id="" /></label>
                <label htmlFor="">Best Email<input type="text" name="" id="" /></label>
                <label htmlFor="">Re-enter Email<input type="text" name="" id="" /></label>
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

export default billing