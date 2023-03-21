const magicNumbers = (min = 1, max = 70) => {
  const minimal = Math.ceil(min);
  const maximum = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (maximum - minimal + 1));
  return randomNumber;
};

export default magicNumbers;
