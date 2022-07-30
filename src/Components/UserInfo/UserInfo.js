import React from 'react';
import {useParams} from 'react-router-dom'
import useUser from '../../Hooks/useUser';
import Card from '../Card/Card';

const UserInfo = () => {
    const {id}=useParams()
    const user=useUser(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
    console.log(id)
    return (
        <div>
           {/* { <Card key={user.id} user={user}/>} */}
        </div>
    );
};

export default UserInfo;