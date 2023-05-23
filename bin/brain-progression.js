#!/usr/bin/env node

import greeting from '../scr/cli.js';
import { answerForm, checkAnswer } from '../scr/index.js';
import { getRandomInRange, progression, gitProgress } from '../scr/math.js';

const progress = () => {
  const userName = greeting('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const a = getRandomInRange();
    const b = getRandomInRange(2, 8);
    const prog = progression(a, b);
    const userAnswer = answerForm(prog, 'string');
    const correctAnswer = gitProgress(prog);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

progress();
