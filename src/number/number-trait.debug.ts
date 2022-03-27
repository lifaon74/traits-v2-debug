import { INSTANCE_OF } from '../../../traits-v2/dist';
import { createNumber } from './create-number';

function debugNumberTrait1(): void {
  const numA = createNumber(5);
  const numB = createNumber(3);
  const numC = numA.add(numB);
  const numD = numA.add(9);
  (window as any).num = createNumber;
  console.log(numD.valueOf());
  console.log(numD.toString());
  console.log(numD[INSTANCE_OF](createNumber));

}


function debugNumberTrait2(): void {
  console.time('start');
  const value = createNumber(Math.random());
  for (let i = 0; i < 1e5; i++) {
    const num = createNumber(Math.random());
    value.add(num);
  }
  console.timeEnd('start');
  console.log(value.valueOf());
}

/*--------------------------*/


export function debugNumberTrait(): void {
  debugNumberTrait1();
  // debugNumberTrait2();
}
