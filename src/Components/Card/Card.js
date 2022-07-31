import React from 'react';
import {Link} from 'react-router-dom'


const Card = ({user}) => {
    const {id,title,url} = user || {};
    
    return (
        <div className="col-3  gy-5">
          <div class="card position-relative">
            <img src={url}class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
                <h6 className="p-1 position-absolute top-0 start-0 rounded-top bg-success" style={{width:'30px',height:'30px',textAlign:'center',color:'white'}}>{id}</h6>
                <h5 class="card-title">{title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={`/user/${id}`} class="btn btn-success">Learn More</Link>
            </div>
            </div>
        </div>
    );
};

export default Card;