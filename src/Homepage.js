import React from 'react';

const HomePage = ({ handleButtonClick }) => {
  return (
    <div className="homepage">
      <h1 className="heading">Solar Lake Cleaner</h1>
      <h3>the solar lake cleaneer helps us keep our enviorment clean using sustainable methods</h3>
      <button className="button" onClick={handleButtonClick}>
        Tap to see how it works
      </button>
    </div>
  );
};

export default HomePage;
