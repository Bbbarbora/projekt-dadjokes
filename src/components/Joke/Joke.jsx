import { useState } from 'react';
import './Joke.css';
import likeUp from './img/like-up.png';
import likeDown from './img/like-down.png';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  // Stav spravujeme lokálne, inicializujeme z props
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [currentDislikes, setCurrentDislikes] = useState(dislikes);

  const handleLike = () => setCurrentLikes(currentLikes + 1);
  const handleDislike = () => setCurrentDislikes(currentDislikes + 1);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} alt={`${userName} avatar`} />
          <p className="user-name">{userName}</p>
        </div>
        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button onClick={handleLike} className="btn-like btn-like--up"
        style={{ backgroundImage: `url(${likeUp})` }}>
        </button>
        <span className="likes-count likes-count--up">{currentLikes}</span>
        <button onClick={handleDislike} className="btn-like btn-like--down"
        style={{ backgroundImage: `url(${likeDown})` }}>
        </button>
        <span className="likes-count likes-count--down">{currentDislikes}</span>
      </div>
    </div>
  );
};

