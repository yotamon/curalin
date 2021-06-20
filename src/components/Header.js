const header = ({title}) => {
    return (
        <header>
            <div className="upper-header">
                <div className="container">
                    <img src="./images/security.png" alt="" />
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="lower-header">
                <div className="container">
                    <div className="promotions">
                        <div className="promotion">
                            <svg className="v-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                            <p>100% Guarantee</p>
                        </div>
                        <div className="promotion">
                            <svg className="v-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                            <p>100% Secure</p>
                        </div>
                        <div className="promotion">
                            <svg className="v-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                            <p>100% Encrypted Checkout</p>
                        </div>
                    </div>
                    <div className="questions">
                        <span className="title">Questions?</span><span>1-888-288-7307</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default header
