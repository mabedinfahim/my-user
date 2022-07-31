import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom'
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user]=useAuthState(auth);

    return (
        <div>
            <div className="container-fluid">
                <div className="">
                    <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container">
                            <Link to="/"className="navbar-brand" href="#">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                <CustomLink to="/" className="nav-link active text-success" aria-current="page" href="#">Home</CustomLink>
                                </li>
                                <li className="nav-item">
                                <CustomLink to='/users' className="nav-link text-success" href="#">Users</CustomLink>
                                </li>
                                <li className="nav-item">
                                <CustomLink to='/login' className="nav-link text-success" href="#">Login</CustomLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                                {user? <div> <Link to="/" className="btn btn-outline-success">Sign out</Link> </div>:<Link to="/" className="btn btn-outline-success">User</Link>}
                            </form>
                            </div>
                        </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;<h1>This is Header page</h1>