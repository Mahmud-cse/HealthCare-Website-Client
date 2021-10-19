import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import './Registration.css';

const Registration = () => {
    const {createUserWithEmailAndPassword,auth,setUser,updateProfile}=useAuth();
    const [email,setEmail]=useState('');    
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [name,setName]=useState('');

    const handleName=(e)=>{
        setName(e.target.value);
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }

    const handleRegistration=(e)=>{
        e.preventDefault();
        if(password.length<6){
            setError('Password should be at least 6 characters');
            return;
        }
        console.log(name);

        // 

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            setUserName();
            setUser(user);
            setError('');
            Swal.fire(
                'Registration Success!',
                'Website is yours now.',
                'success'
              )
        })
        .catch(error=>{
            setError(error.message);
        })
    }

        const setUserName=()=>{
        updateProfile(auth.currentUser,{displayName:name})
        .then(result=>{})
        };
    
        // window.location.reload();

        function refresh() {    
            setTimeout(function () {
                window.location.reload()
            }, 30000);
        }

        refresh();
    return (
        <div id="signupSection" className="container customSignUp">
        <div className="p-5">
        <form className="p-5" id="customLogin3" onSubmit={handleRegistration}>
                <h3>Register</h3>

                <div className="form-group mb-2" >
                    <label>Name</label>
                    <input onBlur={handleName} type="text" className="form-control" placeholder="Name" style={{width:"100%",marginRight:"120px"}}/>
                </div>

                <div className="form-group mb-2">
                    <label>Email address</label>
                    <input onBlur={handleEmail} type="email" className="form-control" placeholder="Enter email" style={{width:"100%",marginRight:"120px"}} required/>
                </div>

                <div className="form-group mb-2">
                    <label>Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" placeholder="Enter password" style={{width:"100%",marginRight:"120px"}} required/>
                    <p className="mt-4 text-danger">{error}</p>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-2 mt-2">Register</button>
                <p className="forgot-password text-right">
                    Already Registered? <Link to="/login" className="custom-link">Log in Here</Link>
                </p>
            </form>
        </div>
    </div>
    );
};

export default Registration;