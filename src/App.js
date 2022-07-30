import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Card from './Components/Card/Card';
import UserInfo from './Components/UserInfo/UserInfo';
import Users from './Components/Users/Users';

const App = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/users" element={<Users/>}>
              {/* <Route path='/:userinfo' element={<UserInfo/>}></Route> */}
            </Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/card" element={<Card/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </div>
  );
};

export default App;