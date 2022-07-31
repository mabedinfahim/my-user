import React from 'react';
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth'
import {useLocation, Navigate} from 'react-router-dom'


const RequireAuth = () => {
    const [user]=useAuthState(auth);
    const location=useLocation();
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace/>
    }
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;