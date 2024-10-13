import React, { useState } from 'react';
import { AlignJustify, User } from 'lucide-react';
import Aicompanieslogo from '../image/2d2b920bd1e573c3bc49391f1378ba69.png';
import Model from './Model';
import { Link } from "react-router-dom";
import DropDown from './DropDown';


const Navbar = ( { activeTab, setActiveTab }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isPopupOpenProfile, setPopupOpenProfile] = useState(false);
    // const [activeTab, setActiveTab] = useState('ai_companies');
    // const handleTabChange = (tabIndex) => {
    //     setActiveTab(tabIndex);
    // };

    const openPopup = () => {
        setPopupOpen(true);
    };

    const openProfilePopup = () => {
        setPopupOpenProfile(prev => !prev);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const closeProfilePopup = () => {
        setPopupOpenProfile(false);
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="page-main-content">
                    <div className="logo">
                        <Link to='/'><img src={Aicompanieslogo} alt="" /></Link>
                    </div>
                    <div className="middle-center-header">
                    <nav>
                <ul className="nav-tabs-links">
                    <li>
                        <a
                            href="/ai-companies"
                            className={activeTab === 'ai_companies' ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab('ai_companies'); // Update active tab
                            }}
                        >
                            AI Companies
                        </a>
                    </li>
                    <li>
                        <a
                            href="/ai-services"
                            className={activeTab === 'ai_services' ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab('ai_services'); // Update active tab
                            }}
                        >
                            Service
                        </a>
                    </li>
                    <li>
                        <a
                            href="/ai-tool"
                            className={activeTab === 'ai_tool' ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab('ai_tool'); // Update active tab
                            }}
                        >
                            AI Tool
                        </a>
                    </li>
                </ul>
            </nav>
                    </div>
                    <div className="user-icon-profile">
                        <li><a href="/" className="mt-1">DirPonit Your Home</a></li>
                        <li>
                            <a
                                href="/openModelBtn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    openPopup();
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 512 512">
                                    <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                                </svg>
                            </a>
                        </li>

                        <div className="profile-menu shadow rounded-pill">
                            <span className='d-flex align-items-center pe-auto' onClick={openProfilePopup}>
                                <p className='mx-2 text-dark m-2'>
                                    <AlignJustify />
                                    <User className='mx-2' />
                                </p>
                            </span>
                        </div>

                    </div>
                </div>

            </div>
            <DropDown isProfile={isPopupOpenProfile} onClose={closeProfilePopup} />
            <Model isOpen={isPopupOpen} onClose={closePopup} />

            {activeTab === 'ai_companies' && (
                <div className="search-container">
                    <div id="ai_companies_search_bar" className="search-bar">
                        <span>Region</span>
                        <span>Technology</span>
                        <span>AITool</span>
                        <input type="text" placeholder="Search AI Companies" />
                    </div>
                </div>
            )}
            {activeTab === 'ai_services' && (
                <div className="search-container">
                    <div id="ai_services_search_bar" className="search-bar">
                        <span>Location</span>
                        <span>Category</span>
                        <span>Service</span>
                        <input type="text" placeholder="Search Services" />
                    </div>
                </div>
            )}
            {activeTab === 'ai_tool' && (
                <div className="search-container">
                    <div id="ai_tool_search_bar" className="search-bar">
                        <span>Company</span>
                        <span>Tool</span>
                        <span>Platform</span>
                        <input type="text" placeholder="Search AI Tools" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
