import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Profile.css'
import profileImage from './assets/image-jeremy.png'


const Profile = () => {
    const activeLink = useLocation();
    let daily, weekly, monthly = '';
    switch (activeLink.pathname) {
        case "/daily":
            daily = 'active-link';
            break;
        case "/weekly":
            weekly = 'active-link';
            break;
        case "/monthly":
            monthly = 'active-link';
            break;
        default:
            daily = 'active-link';
            weekly = '';
            monthly = '';
            break;
    }
    return (
        <div className='profile'>
            <div className='profile-top'>
                <img src={profileImage} alt="Profile Image" className='profile-image' />
                <div className='profile-text'>
                    <div className='font-weight-300 font-color-paleblue'>Report for</div>
                    <div className='font-weight-300 set-font-size-name'>Jeremy Robson</div>
                </div>
            </div>
            <div className='profile-menue'>
                <Link to="/daily" className={`font-weight-300 font-color-desaturatedblue menue-link ${daily}`}>Daily</Link>
                <Link to="/weekly" className={`font-weight-300 font-color-desaturatedblue menue-link ${weekly}`}>Weekly</Link>
                <Link to="/monthly" className={`font-weight-300 font-color-desaturatedblue menue-link ${monthly}`}>Monthly</Link>
            </div>
        </div>
    )
}

export default Profile
