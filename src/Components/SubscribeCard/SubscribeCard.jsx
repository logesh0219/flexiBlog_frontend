import React from 'react';
import './SubscribeCard.css';

const SubscribeCard = () => {
    return (
        <div className='container'>
            <div className="subscribe-card">
                <div className="subscribe-card-wrapper">
                    <h2 className="subscribe-card-heading">Subscribe to our newsletter!</h2>
                    <div className="subscribe-card-para para">We'll send you the best of our blog just once a month. We promise.</div>
                    <div className="mailing-data-form">
                        <form className="mailing-form">
                            <div className="subscribe-input">
                                <input type="text" placeholder='Email Address' className='email-input'/>
                            </div>
                            <button className='button-primary primary mailing-btn'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeCard