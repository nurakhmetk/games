import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Cell from '../components/Cell';

const Cells = ({ emojis, setEmojis, steps, setSteps, setGameIsFinished }) => {
  const [chosenCell, setChosenCell] = useState(null);
  const [secondChosenCell, setSecondChosenCell] = useState(null);

  useEffect(() => {
    if (steps > 1) {
      if (emojis.every((obj) => obj.isMatched === true)) {
        setGameIsFinished(true);
      }
    }
  }, [emojis]);

  const handleCellClick = (emoji) => {
    if (!chosenCell) {
      return setChosenCell(emoji);
    }

    if (chosenCell.label === emoji.label) {
      setSteps((prev) => prev + 1);
      setEmojis(
        emojis.map((obj) => {
          if (obj.label === chosenCell.label) {
            return { ...obj, isMatched: true };
          }

          return obj;
        })
      );
      return setChosenCell(null);
    }

    if (chosenCell.label !== emoji.label) {
      setSecondChosenCell(emoji);
      setSteps((prev) => prev + 1);

      return setTimeout(() => {
        setSecondChosenCell(null);
        setChosenCell(null);
      }, 1000);
    }
  };

  return (
    <>
      {!!emojis &&
        emojis.map((emoji) => {
          return (
            <Cell
              emoji={emoji}
              key={uuid()}
              handleCellClick={handleCellClick}
              chosenCell={chosenCell}
              secondChosenCell={secondChosenCell}
              flipped={emoji.isMatched}
            />
          );
        })}
    </>
  );
};

export default Cells;
