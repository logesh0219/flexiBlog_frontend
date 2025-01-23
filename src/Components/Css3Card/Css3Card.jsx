/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Css3Card.css'
import { Link } from 'react-router-dom';
import CardDetail from '../CardDetail/CardDetail';

const Css3Card = ({ CSS3Data }) => {
  return (
    <div className='container'>
      <div className="card-data-wrapper">
        <div className="card-title-container">
          <h2 className='card-heading'>
              {CSS3Data.category}
          </h2>
          <button className="view-more-btn card-btn"><Link to="/category/css3" state={{allData : CSS3Data.data}}>View More</Link></button>
        </div>
        <div className="divider"></div>
        <CardDetail CardData={CSS3Data}/>
      </div>
    </div>
  )
}

export default Css3Card