import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { GoogleLoginButton } from "react-social-login-buttons";
import './Login.css';
import Swal from 'sweetalert2';

const Login = () => {
    const {signInUsingGoogle,signInWithEmailAndPassword,auth,setUser,setIsLoading}=useAuth();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    // const location=useLocation();
    const history=useHistory();
    // const redirect_uri=location.state?.from || '/home';

    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then((result)=>{
            setUser(result.user);
            history.push('/home');
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode,errorMessage);
          })
          .finally(()=>setIsLoading(false));
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }

    // handle Login
    const handleLogin=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            Swal.fire(
                'Login Success!',
                'Website is yours now.',
                'success'
              );
              history.push('/home');
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }


    // const {user,signInUsingGoogle}=useFirebase();

    return (
        <div>
        <div className="container customLogin p-5">
            <div id="customLogin2">
            <form onSubmit={handleLogin} className="p-5">
                    <h3>Sign In</h3>

                    <div className="form-group mb-2">
                        <label>Email address</label>
                        <input onBlur={handleEmail} type="email" className="form-control" placeholder="Enter email" style={{width:"100%",marginRight:"120px"}}/>
                    </div>

                    <div className="form-group mb-2">
                        <label>Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" placeholder="Enter password" style={{width:"100%",marginRight:"120px"}}/>
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
                    <p>Don't Have an Account? <Link to="/register" style={{textDecoration:"none"}}>Register Now</Link></p>
                    </div>
                    <div style={{textAlign:"center",margin:"25px"}}><b>Or</b></div>
                    

                    <div>
                        {/* <a onClick={signInUsingGoogle} href="/#" class="google btn">
                            <i class="fab fa-google"></i> Login with Google
                        </a> */}
                        <GoogleLoginButton onClick={handleGoogleLogin}></GoogleLoginButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;