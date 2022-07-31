import React from 'react';
import {useParams} from 'react-router-dom'
import useUser from '../../Hooks/useUser';
import Card from '../Card/Card';
const UserInfo = () => {
    const {id}=useParams()
    const user=useUser(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
    console.log(user)
    return (
       <div className="row h-50">
         <div className="d-grid col-6 mx-auto my-5">
            <div class="card position-relative" >
            <img src={user[0]?.url} class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
                <h6 className="p-1 position-absolute top-0 start-0 rounded-top bg-success" style={{width:'30px',height:'30px',textAlign:'center',color:'white'}}>{id}</h6>
                <h5 class="card-title">{user[0]?.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
       </div>
    );
};

export default UserInfo;