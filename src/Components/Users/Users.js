import React from 'react';
import useUser from '../../Hooks/useUser';
import Card from '../Card/Card';

const Users = () => {
    const user=useUser("https://jsonplaceholder.typicode.com/photos")
    return (
       <div className="container">
             
             {user==null?<div className="d-flex justify-content-center align-items-center"><h3 className="">Loading...</h3></div>:<div className='row my-5'>{user.map(user=><Card key={user.id} user={user}/>)}</div> }
             
       </div>
    );
};

export default Users;