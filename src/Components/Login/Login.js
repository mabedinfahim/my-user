import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate,useLocation,Link} from 'react-router-dom'

const Login = () => {
    const [userInfo,setUserInfo]=useState(
        {
        email:"",
        password:"",
        confirmPass:""
        })

        const handelWithInput=(e)=>{
            userInfo[e.target.name]=e.target.value;
        }
       
        const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);

          const [loginUser,loginLoading,loginError]=useAuthState(auth)

          const navigate=useNavigate()
          const location=useLocation()
          const from=location.state?.from?.pathname || "/"
  
          if(loginUser){
              navigate(from,{replace:true})
          }

        const handelWithSubmit=(e)=>{
            e.preventDefault();
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
            
            }

    return (
        <div className="container-fluid">
           <div className="container">
                <div classNameName="row">
                    <div className="d-grid col-5 mx-auto my-5 shadow-lg  bg-body rounded">
                        <h4 className="text-center pt-3">Login</h4>
                        <form className='px-4 py-4' onSubmit={handelWithSubmit}>
                            
                            <div className="mb-3 ">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handelWithInput} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={handelWithInput} type="password" name="password" className="form-control" id="exampleInputPassword1" required/>
                            </div>
                            <div class="row mt-4">
                                <div className="d-grid col-6 mx-auto">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                                <p className="text-center pt-4">New to My-user?<Link to="/register">Register Now</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Login;