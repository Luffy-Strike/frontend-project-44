import { getRandomInRange, getDivisor } from '../scr/math.js';
import greeting from '../scr/cli.js';
import { answerForm, checkAnswer } from '../scr/index.js';

const gcd = () => {
  const userName = greeting('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const x = getRandomInRange();
    const y = getRandomInRange();
    const ex = `${x} ${y}`;
    const userAnswer = answerForm(ex);
    const correctAnswer = getDivisor(x, y);
    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

gcd();
