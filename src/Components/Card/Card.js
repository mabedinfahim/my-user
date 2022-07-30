import React from 'react';
import {Link} from 'react-router-dom'


const Card = ({user}) => {
    const {id,title,url} = user || {};
    return (
        <div className="col-3">
          <div class="card">
            <img src={url} class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
                <h2>{id}</h2>
                <h5 class="card-title">{title.slice(0,15)}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/UserInfo" class="btn btn-success">Learn More</Link>
            </div>
            </div>
        </div>
    );
};

export default Card;