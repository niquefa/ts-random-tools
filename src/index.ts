export const genInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
export const genBoolean = (p: number = 0.5) => Math.random() <= p;
export const genIntArrayWithRepetitions = (size: number, minValue: number, maxValue: number): number[] => {
  const answer = new Array<number>(size);
  for (let i = 0; i < size; i++) {
    answer[i] = genInteger(minValue, maxValue);
  }
  return answer;
};
