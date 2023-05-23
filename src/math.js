export const getRandomInRange = (min = 1, max = 70) => Math.floor(min + Math.random() * (max - min + 1));

export const calc = (x, y, oper) => {
  let result = 0;
  if (oper === '+') result = x + y;
  if (oper === '-') result = x - y;
  if (oper === '*') result = x * y;
  return result;
};

export const getOperator = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const operator = array[index];
  return operator;
};

export const getDivisor = (a, b) => {
  let x = a;
  let y = b;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};

export const progression = (a, b) => {
  let result = '';
  const length = getRandomInRange(5, 10);
  const elected = getRandomInRange(1, length - 2);
  for (let i = 0; i < length; i += 1) {
    const form = (a + (b * i));
    result += (i !== elected) ? `${form} ` : '.. ';
  }
  return result;
};

export const gitProgress = (str) => {
  const sort = str.split(' ');
  const indexNum = sort.indexOf('..');
  const oneNumber = parseInt(sort[indexNum - 1], 10);
  const twoNumber = parseInt(sort[indexNum + 1], 10);
  const solution = (oneNumber + twoNumber) / 2;
  return `${solution}`;
};

export const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
