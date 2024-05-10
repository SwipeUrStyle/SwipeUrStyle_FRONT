import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';



 import stylingIcon from '../assets/styling-icon.jpg';
 import scheduleIcon from '../assets/schedule-icon.PNG';
  import closetIcon from '../assets/closet-icon.PNG'; 
  import accountIcon from '../assets/account-icon.PNG'; 

function HeaderPage() {
  return (
    <header className="Header">
      <div className="name-app">
        <p className="name">Swipe Ur Style</p>
        <div className="circle circle-left"></div>
        <div className="circle circle-right"></div>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/Styling">
              <img src={stylingIcon} alt="Styling" />
              <span>Styling</span>
            </Link>
          </li>
          <li>
            <Link to="/schedule">
              <img src={scheduleIcon} alt="Schedule" />
              <span>Schedule</span>
            </Link>
          </li>
          <li>
            <Link to="/closet">
              <img src={closetIcon} alt="Closet" />
              <span>Closet</span>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <img src={accountIcon} alt="Account" />
              <span>Account</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderPage;