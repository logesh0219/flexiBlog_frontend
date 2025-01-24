import React from 'react';
import './Contact.css';
import ContactForm from '../../Components/ContactForm/ContactForm';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
  return (
    <div className="contact" data-aos="fade-up"  data-aos-duration="750" data-aos-once="true">
      <div className="divider"></div>
      <div className="container">
        <div className="contact-page">
          <div className="contact-left-side">
            <div className="contact-wrapper">
              <h2 className="heading1 contact-heading">Let's Connect</h2>
              <div className="para contact-para">
                FlexiBlog theme comes with a pre-made contact form component.
                You can integrate this form with serverless services such as
                Formspree, Getform, FormKeep and others to receive form
                submissions via email.
              </div>
              <div className="divider"></div>
              <ContactForm />
            </div>
          </div>
          <div className="contact-right-side">
            <div className="card-heading2">
              <h2 className="heading2">Our Commitment</h2>
            </div>
            <div className="divider"></div>
            <div className="card">
              <p className="card-para">
                We take our commitment to our users seriously. If you need our
                help with your project, have questions about how to use the site
                or are experiencing any technical difficulties, please do not
                hesitate to contact us.
              </p>
            </div>
            <div className="divider"></div>
            <div className="card-heading2">
              <h2 className="heading2">Advertise With Us</h2>
            </div>
            <div className="divider"></div>
            <div className="card">
              <p className="card-para">Interested in working together?</p>
              <p className="card-para">
                Suspendisse potenti. Mauris mollis diam tempus ut.
              </p>
              <div className="card-info">
                <button className="card-contact-info-btn">
                  <i class="bx bxs-phone"></i>
                </button>
                +1 (888) 888-8888
              </div>
              <div className="card-info">
                <button className="card-contact-info-btn">
                  <i class="bx bxs-envelope"></i>
                </button>
                email@example.com
              </div>
              <div className="card-info">
                <button className="card-contact-info-btn">
                  <i class="bx bxl-telegram"></i>
                </button>
                New York, NY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
