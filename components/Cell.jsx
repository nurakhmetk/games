// import React from 'react';

// const Cell = ({
//   emoji,
//   flipped,
//   handleCellClick,
//   chosenCell,
//   secondChosenCell,
// }) => {
//   return (
//     <div
//       key={emoji.id}
//       className={`one-cell transition delay-150 duration-300 ease-in-out
//       ${flipped && ' bg-white '}
//       ${chosenCell?.id === emoji.id && ' flipped bg-blue-500 z-10 '}
//       ${secondChosenCell?.id === emoji.id && ' flipped bg-blue-500 z-10 '}
//       `}
//       onClick={() => handleCellClick(emoji)}
//     >
//       <span
//         className={
//           flipped
//             ? 'scale-[2.5] cursor-pointer z-10'
//             : 'scale-[2.5] cursor-pointer -z-10'
//         }
//         role='img'
//         aria-label={emoji.label ? emoji.label : ''}
//         aria-hidden={emoji.label ? 'false' : 'true'}
//       >
//         {emoji.emoji}
//       </span>
//     </div>
//   );
// };

// export default Cell;

import React from 'react';

const Cell = ({
  emoji,
  flipped,
  handleCellClick,
  chosenCell,
  secondChosenCell,
}) => {
  return (
    <div className='scene scene--card'>
      <div
        className={`card ${chosenCell?.label === emoji.label && 'is-flipped'}`}
        onClick={() => handleCellClick(emoji)}
      >
        <div className='card__face card__face--front'>front</div>
        <div className='card__face card__face--back'>back</div>
      </div>
    </div>
  );
};

export default Cell;
