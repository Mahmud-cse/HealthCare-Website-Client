import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
        <div className="container customLogin p-5">
            <div id="customLogin2">
            <form className="p-5">
                    <h3>Sign In</h3>

                    <div className="form-group mb-2">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" style={{width:"100%",marginRight:"120px"}}/>
                    </div>

                    <div className="form-group mb-2">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" style={{width:"100%",marginRight:"120px"}}/>
                    </div>

                    <div className="form-group mb-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
                    {/* <p className="text-right">
                        <Link to="/register" className="custom-link">Forget Password</Link>
                    </p> */}
                    <div style={{marginTop:"20px"}}>
                    <p>Don't Have an Account? <Link to="/signup" style={{textDecoration:"none"}}>Sign Up Now</Link></p>
                    </div>
                    <div style={{textAlign:"center",margin:"25px"}}><b>Or</b></div>
                    

                    <div>
                        <a href="/#" class="google btn">
                            <i class="fab fa-google"></i> Login with Google
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;