import { v4 as uuid } from 'uuid';

const emojis = [
  { emoji: '🐑', label: 'sheep', isMatched: false },
  { emoji: '🍌', label: 'banana', isMatched: false },
  { emoji: '🐪', label: 'camel', isMatched: false },
  { emoji: '🚀', label: 'rocket', isMatched: false },
  { emoji: '🏠', label: 'house', isMatched: false },
  { emoji: '🔥', label: 'fire', isMatched: false },
  { emoji: '❤️', label: 'heart', isMatched: false },
  { emoji: '⚽', label: 'ball', isMatched: false },
  { emoji: '🍟', label: 'chips', isMatched: false },
  { emoji: '🎵', label: 'note', isMatched: false },
  { emoji: '🔟', label: 'ten', isMatched: false },
  { emoji: '✈️', label: 'airplane', isMatched: false },
  { emoji: '🐴', label: 'horseface', isMatched: false },
  { emoji: '🦄', label: 'unicorn', isMatched: false },
  { emoji: '🐸', label: 'frog', isMatched: false },
  { emoji: '🥵', label: 'hotface', isMatched: false },
  { emoji: '🦠', label: 'bacteria', isMatched: false },
  { emoji: '🏹', label: 'bow', isMatched: false },
  { emoji: '🏰', label: 'castle', isMatched: false },
  { emoji: '🎁', label: 'gift', isMatched: false },
  { emoji: '💡', label: 'bulb', isMatched: false },
  { emoji: '🏴‍☠️', label: 'pirateflag', isMatched: false },
];

const randomizeNumber = () => {
  return Math.floor(Math.random() * (emojis.length - 1 - 1 + 1));
};

const shuffleArray = () => {
  let array = [];
  for (let i = 0; i < 8; i++) {
    let randomNumber = randomizeNumber();
    let found = array.some((el) => el.label === emojis[randomNumber].label);
    if (found) {
      do {
        randomNumber = randomizeNumber();
        found = array.some((el) => el.label === emojis[randomNumber].label);
      } while (found);
    }
    array.push(emojis[randomNumber], emojis[randomNumber]);
    array.sort(() => Math.random() - 0.5);
    array.sort(() => Math.random() - 0.5);
  }
  return array;
};

const handler = async (req, res) => {
  try {
    const data = shuffleArray();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export default handler;
