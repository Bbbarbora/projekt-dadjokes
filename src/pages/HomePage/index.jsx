import './style.css';
import { useState } from 'react';

export const HomePage = () => {
  const[likesUp, setLikesUp] = useState(0);
  const[likesDown, setLikesDown] = useState(0);

  const handleLikeUp = () => {
    setLikesUp(likesUp + 1);
  };

  const handleLikeDown = () => {
    setLikesDown(likesDown + 1);
  };


  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
              alt="user avatar"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>

        <div className="joke__likes">
          <button onClick={handleLikeUp} className="btn-like btn-like--up"></button>
          <span className="likes-count likes-count--up">{likesUp}</span>
          <button onClick={handleLikeDown} className="btn-like btn-like--down"></button>
          <span className="likes-count likes-count--down">{likesDown}</span>
        </div>
      </div>
    </div>
  );
};
