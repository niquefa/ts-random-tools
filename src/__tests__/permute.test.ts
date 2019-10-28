import { permute, getFactorial } from '../index';

function simpleDebugTest() {
  const LOCAL_DEBUG: boolean = true;
  let minValue: number = 0;
  let maxValue: number = 7;
  let keys = new Array();
  for (let i: number = minValue; i <= maxValue; i++) keys.push(i);
  let debugMessage: string = '';
  let correctFactorial = getFactorial(keys.length);
  let factorialCheck = 0;
  let startTime: number = performance.now();
  for (let i: number = 0; ; i++) {
    debugMessage += `Iteration ${i} is ${keys}\n`;
    keys.forEach(value => {
      expect(value).toBeLessThanOrEqual(maxValue);
      expect(value).toBeGreaterThanOrEqual(minValue);
    });
    var shouldContinue: boolean = permute(keys);
    factorialCheck++;
    if (!shouldContinue) break;
  }
  let endTime: number = performance.now();
  expect(factorialCheck).toBe(correctFactorial);
  if (LOCAL_DEBUG) {qcqxxx
    console.log(debugMessage);
    console.log(`The generation of all the ${correctFactorial} permutation took ${endTime - startTime} milliseconds.`);
  }
}
function bruteForceDebugTest() {
  const LOCAL_DEBUG: boolean = true;
  const MAX_SIZE: number = 7;
  let debugMessage: string = '';
  for (let size: number = 1; size <= MAX_SIZE; size++) {
    let keys = new Array();
    for (let i: number = 0; i <= size; i++) keys.push(i);
    let correctFactorial = getFactorial(keys.length);
    let factorialCheck = 0;
    let set = new Set();
    let startTime: number = performance.now();
    for (let i: number = 0; ; i++) {
      keys.forEach(value => {
        expect(value).toBeLessThanOrEqual(size);
        expect(value).toBeGreaterThanOrEqual(0);
      });
      set.add(`${keys}`);
      var shouldContinue: boolean = permute(keys);
      factorialCheck++;
      if (!shouldContinue) break;
    }
    let endTime: number = performance.now();
    debugMessage += `For size: ${size} permutation count:  ${factorialCheck}, permutations expected:${correctFactorial}, different permutations: ${set.size} (${endTime - startTime} milliseconds) \n`;
    expect(factorialCheck).toBe(correctFactorial);
    expect(set.size).toBe(correctFactorial);
  }
  if (LOCAL_DEBUG) {
    console.log(debugMessage);
  }
}
test('permute', simpleDebugTest);
test('permute', bruteForceDebugTest);
