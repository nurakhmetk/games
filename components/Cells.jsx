import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Cell from '../components/Cell';

const Cells = ({ emojis, setEmojis }) => {
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.label === choiceTwo.label) {
        setEmojis((prevEmojis) => {
          return prevEmojis.map((emoji) => {
            if (emoji.label === choiceOne.label) {
              console.log('they are same');
              return { ...emoji, isMatched: true };
            } else {
              return emoji;
            }
          });
        });
        resetTrn();
      } else {
        resetTrn();
      }
    }
  }, [choiceOne, choiceTwo, setEmojis, emojis]);

  const resetTrn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <>
      {!!emojis &&
        emojis.map((emoji) => {
          return (
            <Cell
              emoji={emoji}
              key={uuid()}
              handleChoice={handleChoice}
              choiceOne={choiceOne}
              choiceTwo={choiceTwo}
              flipped={emoji.isMatched}
            />
          );
        })}
    </>
  );
};

export default Cells;
