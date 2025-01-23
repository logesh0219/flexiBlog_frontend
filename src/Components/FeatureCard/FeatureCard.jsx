import './FeatureCard.css';
import Slider from 'react-slick';
import featureCardData from './FeaturedCardData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      data-role="none"
      className={`slick-arrow slick-prev prev-arrow-custom`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
      </svg>
    </button>
  );
};

const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <button
      data-role="none"
      className={`slick-arrow slick-next next-arrow-custom`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
      </svg>
    </button>
  );
};

const FeatureCard = () => {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container container">
      <div className="card-heading">
        <h2 className="card-heading-text">Featured this month</h2>
      </div>
      <div className="divider"></div>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {featureCardData.map((item, index) => (
            <div
              key={index}
              className={`feature-card slick-slide slider-item`}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-card-data" style={{background:item.background}}>
              <div className="future-card-data-bg-img"> </div>
                <div className="bg-svg">
                  <div className="svg-img">{item.svg}</div>
                </div>
                <div className="future-card-overlay" style={{backgroundImage:"../../Assets/Images/download.png"}}></div>
                <div className="feature-card-details">
                  <button className="card-btn feature-card-btn">
                    {item.btnTitle}
                  </button>
                  <div className="card-title feature-card-title">
                    {item.title}
                  </div>
                  <div className="feature-card-profile-details">
                    <div className="future-card-img">
                      <div
                        className="feature-card-img-wrapper"
                        style={{ width: '64px', height: '48px' }}
                      >
                        <img
                          src={item.profileImg}
                          alt={item.name}
                          style={{
                            transition: 'opacity 500ms linear',
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                    </div>
                    <div className="card-profile-data">
                      <div className="future-card-name">{item.name}</div>
                      <div className="profile-timeline">
                        <div className="future-card-date">{item.date}</div>
                        <div className="future-card-last-seen">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                          </svg>
                          {item.lastSeen}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureCard;
