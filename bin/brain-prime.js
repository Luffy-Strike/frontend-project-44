#!/usr/bin/env node
import greeting from '../scr/cli.js';
import { answerForm, checkAnswer } from '../scr/index.js';
import { isPrime, magicNumbers } from '../scr/math.js';

const prime = () => {
  const userName = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = magicNumbers(1, 100);
    const examplePrime = `${randomNumber}`;
    const userAnswer = answerForm(examplePrime, 'string');
    const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

prime();
