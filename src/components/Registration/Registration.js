import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    return (
        <div id="signupSection" className="container customSignUp">
        <div className="p-5">
        <form className="p-5" id="customLogin3">
                <h3>Register</h3>

                <div className="form-group mb-2" >
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" style={{width:"100%",marginRight:"120px"}}/>
                </div>

                <div className="form-group mb-2">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" style={{width:"100%",marginRight:"120px"}}/>
                </div>

                <div className="form-group mb-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" style={{width:"100%",marginRight:"120px"}}/>
                </div>

                <div className="form-group mb-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" style={{width:"100%",marginRight:"120px"}}/>
                </div>

                <div className="form-group mb-2">
                    <label>Re-enter password</label>
                    <input type="password" className="form-control" placeholder="Re-enter password" style={{width:"100%",marginRight:"120px"}}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-2 mt-2">Register</button>
                <p className="forgot-password text-right">
                    Already Registered? <Link to="/login" className="custom-link">Log in</Link>
                </p>
                <div style={{textAlign:"center",margin:"25px"}}><b>Or</b></div>


                <div>
                <a href="/#" class="google btn">
                    <i class="fab fa-google"></i> Login with Google
                </a>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Registration;