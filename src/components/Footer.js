const footer = () => {
    return (
        <footer>
            <div className="upper-footer">
                <div className="reasons">
                    <div className="number"><p>3</p></div>
                    <div className="text"><p>Resons why your order is <span>safe and secure</span></p></div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="footer-column">
                    <img src="./images/risk-free.png" alt="" />
                    <h3>100% Risk Free</h3>
                    <p>If you’re not thrilled with how fantastic you look and feel after tapping into your unique female hormone advantage & or if you are’nt satisfied for any reason in the next 90 days, return anytime for a full refund (less S&H)</p>
                </div>
                <div className="footer-column">
                    <img src="./images/protected.png" alt="" />
                    <h3>100% Protected</h3>
                    <p>Your checkout is protected by industry leading PCI compliant security.</p>
                </div>
                <div className="footer-column">
                    <img src="./images/secure.png" alt="" />
                    <h3>100% Secure</h3>
                    <p>When you place your order it will be protected by 256-bit encrypted SSL - the same technoligy that blanks use to protect their online transactions!</p>
                </div>
            </div>
        </footer>
    )
}

export default footer
