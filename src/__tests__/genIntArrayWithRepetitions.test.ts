import { genIntArrayWithRepetitions, genInteger } from '../index';
import generate from '@babel/generator';

function basicTest() {
  let minValue: number = 10;
  let maxValue: number = 20;
  let minSize: number = 1;
  let maxSize: number = 10;
  let totalExperiments: number = 100;
  for (let i: number = 0; i < totalExperiments; i++) {
    let randomSize = genInteger(minSize, maxSize);
    let generatedArray = genIntArrayWithRepetitions(randomSize, minValue, maxValue);
    generatedArray.forEach(value => {
      expect(value).toBeLessThanOrEqual(maxValue);
      expect(value).toBeGreaterThanOrEqual(minValue);
    });
  }
}
test('genIntArrayWithRepetitions generator', basicTest);
