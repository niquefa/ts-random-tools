export const genInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
export const genBoolean = (p: number = 0.5) => Math.random() <= p;
export const genIntArrayWithRepetitions = (size: number, minValue: number, maxValue: number): number[] => {
  const answer = new Array<number>(size);
  for (let i = 0; i < size; i++) {
    answer[i] = genInteger(minValue, maxValue);
  }
  return answer;
};
export const getFactorial = (n: number): number => {
  let answer: number = 1;
  for (let i: number = 1; i <= n; i++) {
    answer *= i;
  }
  return answer;
};
export const permute = (element: number[]): boolean => {
  let i: number = element.length - 1;
  while (i > 0 && element[i - 1] >= element[i]) {
    i--;
  }
  if (i <= 0) {
    return false;
  }
  let j: number = element.length - 1;
  while (element[j] <= element[i - 1]) {
    j--;
  }
  let temp: number = element[i - 1];
  element[i - 1] = element[j];
  element[j] = temp;
  j = element.length - 1;
  while (i < j) {
    temp = element[i];
    element[i] = element[j];
    element[j] = temp;
    i++;
    j--;
  }
  return true;
};
