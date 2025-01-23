import React from 'react';
import './CardDetail.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CardDetail = ({CardData}) => {
  return (
    <div className="card-data-container" data-aos="fade-up">
      {CardData.data.slice(0, 4).map((item, index) => (
        <div key={index} className="card-data-wrapper-container">
          <div className="card-data-details">
            <div className="card-data">
              <div className="card-data-img">
                <div
                  className="left-side-card-img"
                  style={{
                    backgroundColor: CardData.background,
                    color: CardData.color,
                  }}
                >
                  <div className="left-side-card-wrapper">
                    <div className="card-data-svg">{CardData.svgIcon}</div>
                    <div className="card-name">{CardData.category}</div>
                  </div>
                  <div className="card-data-bg-img"></div>
                </div>
              </div>
              <div className="card-data-content">
                <div className="card-data-btn">
                  <button
                    className="card-data-title-btn"
                    style={{
                      backgroundColor: CardData.background,
                      color: CardData.color,
                    }}
                  >
                    {CardData.category}
                  </button>
                </div>
                <h2 className="card-heading-title">{item.title}</h2>
                <div className="card-item-profile-data">
                  <h2 className="card-profile-name">{item.author}</h2>
                  <h2 className="card-profile-date">{item.date}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDetail;
