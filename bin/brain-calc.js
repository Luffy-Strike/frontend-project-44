#!/usr/bin/env node
import greeting from "../scr/cli.js";
import { answerForm, checkAnswer } from '../scr/index.js';
import { calc, getOperator } from "../scr/math.js";
import magicNumbers from "../scr/math.js";

const calcGame = () => {
    const userName = greeting('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        const operator = getOperator('+', '-', '*');
        const x = magicNumbers(1, 12);
        const y = magicNumbers(1, 12);
        const example = `${x} ${operator} ${y}`;
        const userAnswer = answerForm(example);
        let correctAnswer = 0;
        switch (operator) {
            case '+':
                correctAnswer = calc(x, y, '+');
                break;
            case '-':
                correctAnswer = calc(x, y, '-');
                break;
            case '*':
                correctAnswer = calc(x, y, '*');
                break;
            default:
        }
        if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
    }
};

calcGame()