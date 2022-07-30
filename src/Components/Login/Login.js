import React, { useState } from 'react';

const Login = () => {
    const [login,setLogin]=useState(false)


    return (
        <div className="container-fluid">
           <div className="container">
                <div classNameName="row">
                    <div className="d-grid col-5 mx-auto my-5 shadow-lg  bg-body rounded">
                        {login? <h4 className="text-center pt-3">Login</h4>:<h4 className="text-center pt-3">Register</h4>}
                        <form className='px-4 py-4'>
                            
                            <div className="mb-3 ">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            {login? <span></span> : <div><div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <input type="password" name="confirmpass" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                                <input type="number" name="number" className="form-control" id="exampleInputPassword1"/>
                            </div></div> }
                            <div className="mb-3 form-check">
                                <input onClick={()=>setLogin(!login)} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div class="row mt-4">
                                <div className="d-grid col-6 mx-auto">
                                <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Login;