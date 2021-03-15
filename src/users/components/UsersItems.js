import React from 'react';
import './UsersItems.css';

const UsersItems = props => {
    return (
       <li className="user-items">
           <div className="user-items__content">
                <div className="user-items__image">
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className="user-items__info">
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount===1?'place':'places'}</h3>
                </div>
           </div>
       </li>
    )
}


export default UsersItems;
