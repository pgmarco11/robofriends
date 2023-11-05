import React from 'react';
import './../index.css';

const Card = ({ 
  key,
  id,
  name,
  email
}) => {
	return(
		<div className="card" key={key}>
        <div className="card-body">
          <div id={id} className="robot">
          <div><span>Name: </span>{name}</div>
          <div><span>Email: </span>{email}</div><br/>
          </div>
        </div>
      </div> 
	);
}

export default Card;