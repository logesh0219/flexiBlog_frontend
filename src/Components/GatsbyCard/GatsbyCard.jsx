/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './GatsbyCard.css'
import { Link } from 'react-router-dom';
import CardDetail from '../CardDetail/CardDetail';

const GatsbyCard = ({GatsbyData}) => {

  return (
    <div className='container'>
    <div className="card-data-wrapper">
      <div className="card-title-container">
        <div className='card-heading'>
          <h2 className="card-heading-text">
            {GatsbyData.category}
          </h2>
        </div>
        <button className="view-more-btn card-btn"><Link to="/category/gatsby" state={{allData : GatsbyData.data}}>View More</Link></button>
        </div>
      <div className="divider"></div>
      <CardDetail CardData={GatsbyData}/>
    </div>
  </div>
  )
}

export default GatsbyCard