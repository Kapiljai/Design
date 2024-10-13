import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImage from "./images/login-image.avif";
import './auth.css';
// import { useNavigate } from "react-router-dom";
// import { useAuth } from './AuthProvider';
import OtpPopup from './PopupOtp'; 

function Signup() {
  // const navigate = useNavigate();
  // const { setIsAuthenticated } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setCpassword] = useState('');
  const [otpVisible, setOtpVisible] = useState(false); 
  const [userId, setUserId] = useState(null); 
  const [isRegistered, setIsRegistered] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email ending with .com');
      return;
    }
    const lowerCaseEmail = email.toLowerCase();

    if (!validatePassword(password)) {
      toast.error('Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    if (password !== c_password) {
      toast.error('Passwords do not match.');
      return;
    }

    const Bodydata = new FormData();
    Bodydata.append('name', name);
    Bodydata.append('email', lowerCaseEmail);
    Bodydata.append('password', password);
    Bodydata.append('password_confirmation', c_password);

    try {
      let response = await fetch("http://127.0.0.1:8000/api/register/store", {
        method: "POST",
        body: Bodydata,
        headers: {
          "Accept": "*/*",
        }
      });

      console.log(Bodydata);
      const data = await response.json();

      if (response.ok) {
        setUserId(data.user_id); 
        setOtpVisible(true); 
        console.log("OTP Popup visible:", otpVisible);
        toast.success('OTP sent to your email. Please verify.', { position: 'top-left' });
      } else {
        toast.error(data.message || 'Registration failed.', { position: 'top-left' });
      }

    } catch (error) {
      console.error("Error details:", error);
      toast.error('An error occurred.', { position: 'top-left' });
    }
  };

  
  const handleOtpVerified = async (otp) => {
    setIsRegistered(true); 
    setOtpVisible(false);
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row">
        <div className="col-lg-5">
          <div className="side-image">
            <img src={loginImage} alt="" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="register-form m-2 card shadow">
            <form onSubmit={handleSubmitForm}>
              <div className="form-group d-flex">
                <label className="w-25 m-1 text-muted font-weight-bold">User Name:</label>
                <input
                  type="text" value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your user name"
                  className="form-control"
                />
              </div>
              <div className="form-group d-flex mt-4">
                <label className="w-25 m-1 text-muted font-weight-bold">Email Address:</label>
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="form-control"
                />
              </div>
              <div className="form-group d-flex mt-4">
                <label className="w-25 m-1 text-muted font-weight-bold">Password:</label>
                <input
                  type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="form-control"
                />
              </div>
              <div className="form-group d-flex mt-4">
                <label className="w-25 m-1 text-muted font-weight-bold">Repeat Password:</label>
                <input
                  type="password" value={c_password} onChange={(e) => setCpassword(e.target.value)}
                  placeholder="Repeat your password"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary aligns-item-center mt-4">Register</button>
            </form>

           
            {otpVisible && <OtpPopup userId={userId} onOtpVerified={handleOtpVerified} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
