/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './ReactCard.css'
import { Link } from 'react-router-dom';
import CardDetail from '../CardDetail/CardDetail';

const ReactCard = ({ReactData}) => {
  return (
    <div className='container'>
    <div className="card-data-wrapper">
      <div className="card-title-container">
        <div className='card-heading'>
          <h2 className="card-heading-text">
            {ReactData.category}
          </h2>
        </div>
        <button className="view-more-btn card-btn"><Link to="/category/react" state={{allData : ReactData.data}}>View More</Link></button>
        </div>
      <div className="divider"></div>
      <CardDetail CardData={ReactData}/>
    </div>
  </div>
  )
}

export default ReactCard