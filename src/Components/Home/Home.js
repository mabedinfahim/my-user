import React from 'react';
import useUser from '../../Hooks/useUser';
import {Link} from 'react-router-dom'
import Card from '../Card/Card';

const Home = () => {
    const user=useUser("https://jsonplaceholder.typicode.com/photos");
    return (
        <div className="container">
            <h1>user:{user.length}</h1>
           <div className="row my-5">
                {user?.slice(0,12).map((user) =><Card key={user.id} user={user}/>)}
           </div>
           <div className="d-grid col-6 mx-auto">
           <Link to='/users' className="btn btn-success w-50 mx-auto mb-5">See more...</Link>
           </div>
        </div>
    );
};

export default Home;