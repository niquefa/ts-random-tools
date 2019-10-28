import { getFactorial } from '../index';

function trivialFactorialTest(){
  const LOCAL_DEBUG : boolean = true;
  const numbers : number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const factorials: number[] = [1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,
    479001600,6227020800,87178291200,1307674368000,20922789888000,355687428096000,6402373705728000,
    121645100408832000,2432902008176640000];
  expect(numbers.length).toBe(factorials.length)
  let debugMessage : string = "";
  for( let i:number = 0; i < numbers.length; i++ ){
    let value : number = getFactorial(numbers[i]);    
    expect(value).toBe(factorials[i]);

    debugMessage += value === factorials[i] ? `${numbers[i]}! = ${value} (OK) \n` :
    `${numbers[i]}! should be ${factorials[i]} and was: ${value}\n`;    
  }
  if( LOCAL_DEBUG ) {
    console.log(debugMessage)
  }
}
test('getFactorial generator', trivialFactorialTest);