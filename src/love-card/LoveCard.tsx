import React, { useState } from 'react';
import './LoveCard.css';

const LoveCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`bgoverlay ${isOpen ? 'open' : ''}`}>
      <div className="container">
        <span className="ico">
          <span className="ico2"></span>
          <span className="title" onClick={handleTitleClick}>Click Me</span>
        </span>
        <div className="endtext">
          <span className="close" title="Restart" onClick={handleCloseClick}><i className="fa fa-times"></i></span>
          <h1>Хэй пупсик!!!</h1>
          <h2>А ты ничего</h2>
        </div>
      </div>
    </div>
  );
}

export default LoveCard;
