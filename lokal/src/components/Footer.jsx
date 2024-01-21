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
      <button className="footerButton" onClick={() => handleButtonClick('Listings')}>
        <img src="lokal/src/components/favicons/icons8-settings-32.png"></img>
        <div>
          Listings
        </div>
      </button>

      <button className="footerButton" onClick={() => handleButtonClick('Post')}>
        <div>
          Post
        </div>
      </button>

      <button className="footerButton" onClick={() => handleButtonClick('Inbox')}>
        <div>
          Inbox
        </div>
      </button>

      <button className="footerButton" onClick={() => handleButtonClick('Profile')}>
        Profile
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
