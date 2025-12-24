export const RandomNumber = (): string => {
  const min = 10000;
  const max = 99999;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random.toString();
};
