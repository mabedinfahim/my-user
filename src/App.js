import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Card from './Components/Card/Card';
import UserInfo from './Components/UserInfo/UserInfo';
import Users from './Components/Users/Users';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path='/user/:id' element={<RequireAuth><UserInfo/></RequireAuth>}></Route>
            <Route path="/card" element={<Card/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </div>
  );
};

export default App;