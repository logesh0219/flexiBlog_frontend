/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './JavaScriptCard.css';
import { Link } from 'react-router-dom';
import CardDetail from '../CardDetail/CardDetail';

const JavaScriptCard = ({ JavaScriptData }) => {
  return (
    <div className="container">
      <div className="card-data-wrapper">
        <div className="card-title-container">
          <div className="card-heading">
            <h2 className="card-heading-text">{JavaScriptData.category}</h2>
          </div>
          <button className="view-more-btn card-btn">
            <Link
              to="/category/javascript"
              state={{ allData: JavaScriptData.data }}
            >
              View More
            </Link>
          </button>
        </div>
        <div className="divider"></div>
        <CardDetail CardData={JavaScriptData} />
      </div>
    </div>
  );
};

export default JavaScriptCard;
