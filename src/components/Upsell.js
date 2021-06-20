const Upsell = ({onUpsellChange , upsellState}) => {
    return (
        <section className="upsell">
            <div className="upsell-box box">
                <div className="title-section">
                    <h2>Prefer to Save Time & Money?</h2>
                    <div className="box-image">
                        <img src="./images/bundle.png" alt="" />
                    </div>
                </div>
                <div className="subtitle-section">
                    <img src="./images/arrow.svg" alt="" />
                    <p>Save $8 per bottle</p>
                </div>
                <div className="checkbox-section">
                    <label className="label">When you check this box, your order will be upgraded to a CuraLin 3 Pack, saving you time in reordering, <span>and 10% off your order.</span> You are still protected by our money back guarantee.
                        <input type="checkbox" name="bundle" id="bundle" value={upsellState} onChange={(e)=>{onUpsellChange(e.currentTarget.checked)}}/>
                        <span className="checkmark"></span>
                    </label>
                    
                    <span className="checkmark"></span>
                </div>
            </div>
        </section>
    )
}

export default Upsell