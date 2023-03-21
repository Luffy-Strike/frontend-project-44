#!/usr/bin/env node
import greeting from '../scr/cli.js';
import magicNumbers from '../scr/math.js';
import { answerForm, checkAnswer } from '../scr/index.js';

const even = () => {
  const userName = greeting('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = magicNumbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnwer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnwer, userName, i)) break;
  }
};

even()

export default even;