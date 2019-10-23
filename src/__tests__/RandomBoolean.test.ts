import { RandomBoolean } from '../index';

function frequencyTest(){
  const keys: boolean[] = [false,true]
  let expectedFrequency : number = 10000;
  let totalExperiments : number = expectedFrequency*2;
  let maxError : number = expectedFrequency/10
  var frequency = new Map();
  for( let i: number = 0 ; i < totalExperiments; i++ ){
    let randomNumber = RandomBoolean()
    if( frequency.has(randomNumber) ) {
      frequency.set( randomNumber, frequency.get(randomNumber) + 1 )
    } else {
      frequency.set( randomNumber,1 )
    }
  }
  var debugMessage: string = "";
  for( let key of keys ){
    let value : number = frequency.get(key);
    expect(value).toBeLessThanOrEqual(expectedFrequency + maxError)
    expect(value).toBeGreaterThanOrEqual(expectedFrequency - maxError)
    debugMessage += `Frecuency of ${key} is ${value} expected: ${expectedFrequency} difference: ${expectedFrequency-value}\n`;    
  }
  console.log(debugMessage)
}
test('RandomBoolean generator', frequencyTest);