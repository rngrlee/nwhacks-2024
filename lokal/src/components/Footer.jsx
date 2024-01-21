import React, { useState } from 'react';

const FooterMenu = () => {
  const [activeComponent, setActiveComponent] = useState('');

  const footerStyle = {
    // ... existing styles
  };

  const menuItemStyle = {
    // ... existing styles
  };

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div style={footerStyle}>
      <button style={menuItemStyle} onClick={() => handleButtonClick('Listings')}>Listings</button>
      <button style={menuItemStyle} onClick={() => handleButtonClick('Post')}>Post</button>
      <button style={menuItemStyle} onClick={() => handleButtonClick('Inbox')}>Inbox</button>
      <button style={menuItemStyle} onClick={() => handleButtonClick('Profile')}>Profile</button>
      {/* Render the active component here */}
      {activeComponent === 'Listings' && <ListingsComponent />}
      {activeComponent === 'Post' && <PostComponent />}
      {activeComponent === 'Inbox' && <InboxComponent />}
      {activeComponent === 'Profile' && <ProfileComponent />}
    </div>
  );
};

export default FooterMenu;
