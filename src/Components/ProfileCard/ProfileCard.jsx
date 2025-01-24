import React from 'react';
import './ProfileCard.css'

const ProfileCard = () => {
  return (

    <div className="container">
      <div className="profile-card">
        <div className="profile-card-container">
          <div className="profile-card-wrapper">
            <div className="profile-card-content">
              <div className="profile-card-image">
              </div>
            </div>
            <div className='profile-card-details'>
              <div className="profile-card-details-wrapper">
                <h2 className="heading1 profile-card-heading">
                  You can Learn Anything.
                </h2>
                <h2 className="sub-heading">
                  "When I got out of university, I couldn't get a job. But now, I have a job and I am in love with computer science because of Academy."
                </h2>
                <h2 className="profile-name">
                  Aubree Joyce
                </h2>
              </div>
            </div>
            <div className="profile-bg-image">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard