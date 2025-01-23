import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='card'>
        <form>
            <div className="contact-container">
                <div className="input-wrapper">
                    <label htmlFor="contact-form-name">Name</label>
                    <input type="text" for="contact-form-name" name='name' className='input-box' />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="contact-form-company-name">Company Name</label>
                    <input type="text" for="contact-form-company-name" name='company-name' className='input-box' />
                </div>
            </div>
            <div className="contact-container">
                <div className="input-wrapper">
                    <label htmlFor="contact-form-email">Email</label>
                    <input type="text" for="contact-form-email" name='email' className='input-box' placeholder='email@example.com'/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="contact-form-phone">Phone Number</label>
                    <input type="text" for="contact-form-phone" name='phone' className='input-box' placeholder='(xxx) xxx-xxxx'/>
                </div>
            </div>
            <div className="contact-container">
                <div className="input-wrapper">
                    <label htmlFor="contact-form-subject">Subject</label>
                    <input type="text" for="contact-form-subject" name='subject' className='input-box' />
                </div>
            </div>
            <div className="contact-container">
                <div className="input-wrapper">
                    <label htmlFor="contact-form-message">Your Message</label>
                    <textarea for="contact-form-message" name='message' className='input-box' />
                </div>
            </div>
            <button className='button-primary primary'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm