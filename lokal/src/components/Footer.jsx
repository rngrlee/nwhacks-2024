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
      <button className="footerButton" onClick={() => handleButtonClick('Listings')}>Listings</button>
      <button className="footerButton" onClick={() => handleButtonClick('Post')}>Post</button>
      <button className="footerButton" onClick={() => handleButtonClick('Inbox')}>Inbox</button>
      <button className="footerButton" onClick={() => handleButtonClick('Profile')}>Profile</button>
      {/* Render the active component here */}
      {activeComponent === 'Listings' && <ListingsComponent />}
      {activeComponent === 'Post' && <PostComponent />}
      {activeComponent === 'Inbox' && <InboxComponent />}
      {activeComponent === 'Profile' && <ProfileComponent />}
    </div>
  );
};

export default FooterMenu;
