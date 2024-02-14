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
          <h1>Я тебя люблю!!!</h1>
          <h3>Моя дорогая Вика - ты воплощение всего, что самое прекрасное и доброе в этом мире. Ты – светлая искорка в моей жизни, которая освещает мой путь своим теплом и нежностью.</h3>
        </div>
      </div>
    </div>
  );
}

export default LoveCard;
