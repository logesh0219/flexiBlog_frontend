import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
const Banner = () => {

  return (
    <div className="container">
      <div className="banner">
        <div className="banner-details">
          <h1 className="heading1 banner-heading">
            Learn React in <span>30 days</span> with great instructors!
          </h1>
          <div className="para banner-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
          </div>
          <div className="btn-group">
            <button className="button-primary primary">Start Learning</button>
            <button className="button-primary secondary"><Link to="/tutors">View Tutors</Link></button>
          </div>
        </div>
        <div className="profile-details">
        </div>
        <div className="banner-bg-drawing"></div>
        <div className="course-details">
          <div className="banner-svg marginX1rem">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"></path>
            </svg>
          </div>
          <div className="marginX1rem course-content"><span className='course-content-count'>250+</span><span className='course-title'>LESSONS</span></div>
          <div className="marginX1rem course-content"><span className='course-content-count'>30+</span><span className='course-title'>COURSES</span></div>
          <div className="marginX1rem course-content"><span className='course-content-count'>15+</span><span className='course-title'>TUTORS</span></div>
        </div>
      </div>
    </div>
  );
}

export default Banner