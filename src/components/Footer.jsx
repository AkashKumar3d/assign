import React from 'react'
import "./Styles/footer.css"
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footerbox">
                <div className="footer-main-left">
                    <div className='left-first-box'>
                        <p>Subscribe to Aesop communications</p>
                        <hr />
                        {/* <div className='blank_div'></div> */}
                        <div className='footer-input'>
                            <input type="email" placeholder='Email address' />
                            <br />
                            {/* <br /> */}
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: "inherit", fontWeight: 400 }}>
                                    Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.
                                </label>
                            </div>
                            <br />
                            <div className="left-second-box">
                                <p>Sustainability</p>
                                <hr />
                                <p> All Aesop products are vegan, and we do not test our formulations  or <br /> ingredients on animals. We are Leaping Bunny approved and a Certified B <br /> Corporation. Learn more</p>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
            <div className="smsicon"></div>
        </div>
    )
}

export default Footer