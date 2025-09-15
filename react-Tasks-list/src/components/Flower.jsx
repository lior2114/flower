import React from 'react';
import './Flower.css';

const Flower = () => {
  return (
    <div className="container">
      <div className="flower">
        <div className="stem"></div>
        <div className="flower-head">
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="center"></div>
        </div>
      </div>
      
      <div className="love-text">אני אוהב אותך</div>
      
      <div className="hearts">
        <div className="heart">💖</div>
        <div className="heart">💕</div>
        <div className="heart">💗</div>
        <div className="heart">💝</div>
        <div className="heart">💘</div>
        <div className="heart">💖</div>
        <div className="heart">💕</div>
        <div className="heart">💗</div>
        <div className="heart">💝</div>
      </div>

      <div className="stars">
        <div className="star">⭐</div>
        <div className="star">✨</div>
        <div className="star">🌟</div>
        <div className="star">💫</div>
        <div className="star">⭐</div>
      </div>
    </div>
  );
};

export default Flower;
