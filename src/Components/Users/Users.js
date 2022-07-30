import React from 'react';
import useUser from '../../Hooks/useUser';
import Card from '../Card/Card';

const Users = () => {
    const user=useUser("https://jsonplaceholder.typicode.com/photos")
    return (
       <div className="container">
             <div className='row my-5'>
            {user.map(user=><Card key={user.id} user={user}/>)}
        </div>
       </div>
    );
};

export default Users;