import { RandomInteger } from '../index';

function frequencyTest(){
  let min : number = 11;
  let max : number = 20;
  let expectedFrequency : number = 10000;
  let totalExperiments : number = expectedFrequency*(max-min+1);
  let maxError : number = expectedFrequency/10
  var frequency = new Map();
  for( let i: number = 0 ; i < totalExperiments; i++ ){
    let randomNumber = RandomInteger(min,max);
    if( frequency.has(randomNumber) ) {
      frequency.set( randomNumber, frequency.get(randomNumber) + 1 )
    } else {
      frequency.set( randomNumber,1 )
    }
  }
  var debugMessage: string = "";
  for( let n: number = min; n <= max; n ++ ){
    let value : number = frequency.get(n);
    expect(value).toBeLessThanOrEqual(expectedFrequency + maxError)
    expect(value).toBeGreaterThanOrEqual(expectedFrequency - maxError)
    debugMessage += `Frecuency of ${n} is ${value} expected: ${expectedFrequency} difference: ${expectedFrequency-value}\n`;    
  }
  console.log(debugMessage)
}
test('RandomInteger generator', frequencyTest);