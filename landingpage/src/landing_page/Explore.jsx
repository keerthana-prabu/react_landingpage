import React from 'react'
import './Explore.css'
import { Link } from "react-router-dom";


function Explore(props) {
  return ( <>
  <div className='expl'>
    <div className="places">
        <img src={props.img} alt={props.name} className="place-img"/>
        <div className='place-info'>
            <h3 className='place-name'>{props.name}</h3>
            <p className='place-country'>{props.country}</p>

        </div>
      <Link to="/book"><button>Book now!</button></Link>
    </div>
  </div>  
    </>
  );
}

export default Explore;