import React from 'react';

const Cell = ({ emoji, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(emoji);
  };

  return (
    <div
      key={emoji.id}
      className={flipped ? 'one-cell bg-white' : 'one-cell'}
      onClick={handleClick}
    >
      <span
        className={
          flipped
            ? 'scale-[2.5] cursor-pointer z-10'
            : 'scale-[2.5] cursor-pointer -z-10'
        }
        role='img'
        aria-label={emoji.label ? emoji.label : ''}
        aria-hidden={emoji.label ? 'false' : 'true'}
      >
        {emoji.emoji}
      </span>
    </div>
  );
};

export default Cell;
