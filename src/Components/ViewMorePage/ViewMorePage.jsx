import React, { useState } from 'react';
import './ViewMorePage.css';
import { Link, useParams } from 'react-router-dom';

const ViewMorePage = ({ CardData }) => {
  const { categoryName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categoryData = CardData.find(
    (item) => item.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (!categoryData) {
    return <div>Category not found!</div>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categoryData.data.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(categoryData.data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="view-more-page">
      <div className="divider"></div>
      <div className="container">
        <div className="view-more-head">
          <div className="view-more-head-wrapper">
            <h1 className="heading3 view-more-title">
              {categoryData.category}{' '}
              <div className="view-more-cards-count">
                {categoryData.data.length}
              </div>
            </h1>
          </div>
          <div className="view-more-para">
            <p className="field-details para tutor-field-para view-btn-para">
              {categoryData.subTitle}
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container">
        <div className="card-data-container view-data-container">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="card-data-wrapper-container view-card-data-wrapper"
            >
              <div className="card-data-details view-card-data-details">
                <div className="card-data view-card-data">
                  <div className="card-data-img">
                    <div
                      className="left-side-card-img"
                      style={{
                        backgroundColor: categoryData.background,
                        color: categoryData.color,
                      }}
                    >
                      <div className="left-side-card-wrapper">
                        <div className="card-data-svg">
                          {categoryData.svgIcon}
                        </div>
                        <div className="card-name">{categoryData.category}</div>
                      </div>
                      <div className="card-data-bg-img"></div>
                    </div>
                  </div>
                  <div className="card-data-content view-data-content">
                    <div className="card-data-btn">
                      <a
                        href="javascript:void(0)"
                        className="card-data-title-btn"
                        style={{
                          backgroundColor: categoryData.background,
                          color: categoryData.color,
                        }}
                      >
                        {categoryData.category}
                      </a>
                    </div>
                    <h2 className="card-heading-title">{item.title}</h2>
                    <div className="field-details para tutor-field-para view-btn-para">
                      {item.details}
                    </div>
                    <div className="feature-card-profile-details">
                      <div className="future-card-img">
                        <div
                          className="feature-card-img-wrapper"
                          style={{ width: '64px', height: '48px' }}
                        >
                          <img
                            src={item.profileImage}
                            alt={item.name}
                            style={{
                              transition: 'opacity 500ms linear',
                              objectFit: 'contain',
                            }}
                          />
                        </div>
                      </div>
                      <div className="card-profile-data">
                        <div className="future-card-name view-card--profile-name">
                          {item.author}
                        </div>
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
                            {item.timeToRead}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="pagination-controls">
          <div
            onClick={() => handlePageChange(currentPage - 1)}
            className={`${
              currentPage === 1 ? 'prev-page-disabled' : 'prev-page'
            } page-btn`}
          >
            <Link
              to={`/category/${categoryName}/page/${currentPage - 1}`}
              className={`${
                currentPage === 1 ? 'prev-page-disabled' : 'prev-page'
              } page-btn-text`}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>{' '}
              Previous
            </Link>
          </div>
          <div className="page-number-text">
            Page <strong className="page-number">{currentPage}</strong> of{' '}
            <strong className="page-number">{totalPages}</strong>
          </div>
          <div
            onClick={() => handlePageChange(currentPage + 1)}
            className={`${
              currentPage === totalPages ? 'next-page-disabled' : 'next-page'
            } page-btn`}
          >
            <Link
              to={`/category/${categoryName}/page/${currentPage + 1}`}
              className={`${
                currentPage === totalPages ? 'next-page-disabled' : 'next-page'
              } page-btn-text`}
            >
              Next{' '}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMorePage;
