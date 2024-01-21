import React, { useState } from 'react';
import './css/Styles.css';
import './css/Footer.css';

const FooterMenu = () => {
  const [activeComponent, setActiveComponent] = useState('');

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="footerMenu">

      <button className="footerButton" onClick={() => handleButtonClick('Home')}>
        <i className="fa-solid fa-house fa-2x"></i>
        <div>
          Home
        </div>
      </button>

      <button className="footerButton" onClick={() => handleButtonClick('Inbox')}>
        <i className="fa-regular fa-message fa-2x"></i>
        <div>
          Inbox
        </div>
      </button>

      <button className="footerButton" onClick={() => handleButtonClick('Post')}>
        <i className="fa-regular fa-square-plus fa-2x"></i>
        <div>
          Post
        </div>
      </button>

      <button className="footerButton" onClick={() => handleButtonClick('Listings')}>
        <i className="fa-regular fa-rectangle-list fa-2x"></i>
        {/* <img src="lokal/src/components/favicons/icons8-settings-32.png"></img> */}
        <div>
          Listings
        </div>
      </button>

      <button className="footerButton" onClick={() => handleButtonClick('Profile')}>
      <i className="fa-regular fa-user fa-2x"></i>
        <div>
          Profile
        </div>
      </button>

     
      {/* Render the active component here */}
      {activeComponent === 'Listings' && <ListingsComponent />}
      {activeComponent === 'Post' && <PostComponent />}
      {activeComponent === 'Inbox' && <InboxComponent />}
      {activeComponent === 'Profile' && <ProfileComponent />}
    </div>
  );
};

export default FooterMenu;
