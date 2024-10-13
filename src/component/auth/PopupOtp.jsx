import React, { useState, useEffect } from "react";
import './OtpPopup.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthProvider';

function OtpPopup({ userId, onOtpVerified }) {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [otp, setOtp] = useState(['', '', '', '', '', '']); 
  const [expiresAt, setExpiresAt] = useState(null); 
  const [remainingTime, setRemainingTime] = useState(120); 
  const [error, setError] = useState(null); 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  useEffect(() => {
    const expiryTime = new Date(Date.now() + 120 * 1000);
    setExpiresAt(expiryTime);
    
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) { 
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const otpCode = otp.join(''); 
    if (otpCode.length === 6) {
      try {
       
        let response = await fetch("http://127.0.0.1:8000/api/otp/validate", {
          method: "POST",
          body: new URLSearchParams({
            otp: otpCode,
            user_id: userId
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });

        const data = await response.json();

        if (response.ok) {
          
          const token = data.token;
          localStorage.setItem('token' , token);
          onOtpVerified(otpCode); 
          toast.success('OTP verification Success.', { position: 'top-left' });
          setIsAuthenticated(true);
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          setError(data.message || "OTP verification failed.");
        }
      } catch (error) {
        setError("An error occurred while verifying the OTP. Please try again.");
      } finally {
        setIsSubmitting(false); 
      }
    } else {
      setError("Please enter a valid 6-digit OTP.");
      setIsSubmitting(false);
    }
  };

  const handleResend = () => {
    alert("Resend OTP functionality to be implemented.");
    
  };

  return (
    <>
   
      
        {/* <ToastContainer/> */}
    <div className={`otp-popup ${remainingTime > 0 ? 'show' : 'hide'}`}>
      <div className="otp-container">
        <h2>Enter OTP</h2>
        <form onSubmit={handleSubmit} className="otp-form">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="otp-input"
              disabled={isSubmitting} 
            />
          ))}
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </button>
        </form>

      
        {error && <p className="error-message">{error}</p>}

        {/* <button onClick={() => toast.success('Test Toast!')}>Test Toast</button> */}
        <div className="otp-timer">
          {remainingTime > 0
            ? `Time remaining: ${Math.floor(remainingTime / 60)}:${('0' + (remainingTime % 60)).slice(-2)}`
            : "OTP expired!"}
        </div>

        
        <button onClick={handleResend} className="btn-resend" disabled={remainingTime > 0 || isSubmitting}>
          Resend OTP
        </button>
      </div>
    </div>

    </>
  );
}

export default OtpPopup;
