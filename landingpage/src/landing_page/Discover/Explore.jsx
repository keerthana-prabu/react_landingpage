import React from "react";
import "./Explore.css";
import { Link, useNavigate } from "react-router-dom";

function Explore(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="expl">
        <div className="places">
          <img src={props.img} alt={props.name} className="place-img" />
          <div className="place-info">
            <h3 className="place-name">{props.name}</h3>
            <p className="place-country">{props.country}</p>
          </div>
          <button onClick={() => navigate("/book")}>Book now!</button>
        </div>
      </div>
    </>
  );
}

export default Explore;
