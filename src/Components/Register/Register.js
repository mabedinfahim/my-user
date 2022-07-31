import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {Link} from 'react-router-dom'

const Register = () => {
    const [confirmError,setConfirmError]=useState("")
    const [userInfo,setUserInfo]=useState(
        {
        email:"",
        password:"",
        confirmPass:""
        })


        const [
            createUserWithEmailAndPassword,
            createUser,
            createLoading,
            createError,
          ] = useCreateUserWithEmailAndPassword(auth);
        const handelWithInput=(e)=>{
            userInfo[e.target.name]=e.target.value;
        }

        const handelWithSubmit=(e)=>{
            e.preventDefault();
            if(userInfo.password !== userInfo.confirmPass){
                setConfirmError("Your password dose not match ")
                return;
            }
            setConfirmError("")
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }
    return (
        <div className="container-fluid">
        <div className="container">
             <div classNameName="row">
                 <div className="d-grid col-5 mx-auto my-5 shadow-lg  bg-body rounded">
                     <h4 className="text-center pt-3">Register</h4>
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
                         <div className="mb-3">
                             <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                             <input onBlur={handelWithInput} type="password" name="confirmPass" className="form-control" id="exampleInputPassword1" required/>
                             {createError&& <p className="text-danger">{createError.message}</p>}
                         </div>
                         <div className="mb-3">
                             <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                             <input onBlur={handelWithInput} type="number" name="number" className="form-control" id="exampleInputPassword1"/>
                         </div>
                         <div class="row mt-4">
                             <div className="d-grid col-6 mx-auto">
                             <button type="submit" className="btn btn-success">Submit</button>
                             </div>
                             <p className="text-center pt-3">Already have an account? <Link to="/login">Login</Link> </p>
                         </div>
                     </form>
                 </div>
             </div>
        </div>
     </div>
    );
};

export default Register;