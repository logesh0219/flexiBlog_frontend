/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Tutor.css';
import TutorsData from '../../Assets/Data/TutorsData';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Tutor = () => {
  return (
    <div className="tutor">
      <div className="divider"></div>
      <div className="container" data-aos="fade-down"  data-aos-duration="750" data-aos-once="true">
        <h1 className="heading1 tutor-heading">{TutorsData.heading}</h1>
        <div className="para">{TutorsData.subheading}</div>
      </div>
      <div className="container" data-aos="fade-up"  data-aos-duration="750" data-aos-once="true" >
        {TutorsData.members.map((item, index) => (
          <div key={index}>
            <div className="divider"></div>
            <div className="tutor-card-data">
              <div className="tutor-card-wrapper">
                <div className="tutor-card-left-side">
                  <div className="left-side-img">
                    <a href="#">
                      <div className="left-tutor-profile-image">
                        <div className="left-side-profile-img">
                          <div className="left-side-rounded"></div>
                          <div className="left-side-eclipse"></div>
                          <div
                            className="left-side-image"
                            style={{ width: '150px', height: '150px' }}
                          >
                            <img
                              src={item.profileImage}
                              alt={item.name}
                              style={{
                                opacity: 1,
                                objectFit: 'cover',
                                transition: 'opacity 500ms linear',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="tutor-card-details">
                  <div className="tutor-profile-name">
                    <h2 className="tutor-name">
                      <a href="#">{item.name}</a>
                    </h2>
                  </div>
                  <div className="tutor-profile-details">
                    <div className="tutor-profile-field">
                      <div className="tutor-field-data">
                        <h2 className="field-name">{item.title}</h2>
                        <div className="field-details para tutor-field-para">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="tutor-personal">
                      <div className="tutor-personal-details">
                        <div className="tutor-skill-details">
                          <h2 className="tutor-skill-title">Expertise</h2>
                          {item.expertise.map((ex, id) => (
                            <div className="tutor-skills" key={id}>
                              {ex}
                            </div>
                          ))}
                        </div>
                        <div className="tutor-skill-details">
                          <h2 className="tutor-skill-title">Social Media</h2>
                          {TutorsData.links.map((item) => (
                            <div className="tutor-skills ">
                              {item.svgIcon} <div>{item.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="view-more-btn view-posts card-btn">
                View Posts
              </a>
              <div className="tutor-card-overlay"></div>
              <div className="tutor-card-bg-image"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutor;
