import React , { useState } from 'react'
import {  useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImage from "./images/login-image.avif";
import './auth.css'; 
import { useAuth } from './AuthProvider';
function Login() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const handlelogin = async (e) =>{
    e.preventDefault();

    const Formdata = new FormData();
    Formdata.append('email' , email);
    Formdata.append('password' , password);
    try{
      let response = await fetch("http://127.0.0.1:8000/api/login/store",{
        method:"POST",
        body:Formdata,
        headers:{
          "Accept": "*/*",
        }
      });
      const responsedata = await response.json();
      if(response.ok){
        const token = responsedata.token; 
        localStorage.setItem('token', token); 
        setIsAuthenticated(true);
        toast.success('User  successfully login!', {
          position: 'top-left'
        });
        setTimeout(() => {
          navigate('/');
        }, 2000); 
      }
      else{
        toast.error(responsedata.message || 'login failed.', {
          position: 'top-left'
        });
      }
    }
    catch(error){
      console.error('Error:', error);
      toast.error('An error occurred.', {
        position: 'top-left'
      });
    }

  }
  return (
    <div className="container mt-4">
      <ToastContainer />
    <div className="row ">
      <div className="col-lg-5">
        <div className="side-image">
          <img src={loginImage} alt="" />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="register-form m-2 card shadow">
          <form onSubmit={handlelogin}>
            <div className="form-group d-flex mt-4">
              <label htmlFor="" className="w-25 m-1 text-muted font-weight-bold">Email Address:</label>
              <input
                type="email"  value ={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="form-control"
              />
            </div>
            <div className="form-group d-flex mt-4">
              <label htmlFor="" className="w-25 m-1 text-muted font-weight-bold">Password:</label>
              <input
                type="password" value ={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="form-control"
              />
            </div>
           
            <button type="submit" className="btn btn-primary aligns-item-center mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
