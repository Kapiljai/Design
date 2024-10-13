import React, { useEffect, useRef } from "react";
import { Link,  useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../component/auth/AuthProvider";
const DropDown = ({ isProfile, onClose }) => {
  const useRefDropdown = useRef();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        useRefDropdown.current &&
        !useRefDropdown.current.contains(event.target)
      ) {
        onClose();
      }
    };
    if (isProfile) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfile, onClose]);

  if (!isProfile) return null;

  const handleLogout = async () =>{
    try{
      await logout();
      onClose();
      toast.success('User  successfully login!', {
        position: 'top-left'
      });
      setTimeout(() => {
        navigate('/');
      }, 2000); 
      
    }
    catch(error){
              alert('Logged out');
        }
  }

  return (
    <div className="dropdownprofile" ref={useRefDropdown}>
      <ul>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/auth/login" onClick={onClose}>
                Log in
              </Link>
            </li>
            <li>
              <Link to="/auth/register" onClick={onClose}>
                Sign up
              </Link>
            </li>
          </>
        ) : (
          <li>
             <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
          </li>
        )}

        <hr />
        <li onClick={onClose}>Aicompanies your home</li>
        <li onClick={onClose}>Host an experience</li>
        <li onClick={onClose}>Help center</li>
      </ul>
    </div>
  );
};

export default DropDown;
