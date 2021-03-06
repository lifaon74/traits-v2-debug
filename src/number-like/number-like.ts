import {
  assembleTraitImplementations, Impl, AddTrait, DivideTrait, MultiplyTrait, NegateTrait, SubtractTrait, ToStringTrait
} from '@lifaon/traits';


export interface INumberStruct {
  value: number;
}



/** FOR NUMBER STRUCT **/

@Impl()
export class NumberStructToStringImplementation<GSelf extends INumberStruct> extends ToStringTrait<GSelf> {
  toString(this: GSelf): string {
    return this.value.toString(10);
  }
}

@Impl()
export class NumberStructNegateImplementation<GSelf extends INumberStruct> extends NegateTrait<GSelf, INumberStruct> {
  negate(this: GSelf): INumberStruct {
    return { value: -this.value };
  }
}

@Impl()
export class NumberStructAddImplementation<GSelf extends INumberStruct> extends AddTrait<GSelf, INumberStruct, INumberStruct> {
  add(this: GSelf, value: INumberStruct): INumberStruct {
    return { value: this.value + value.value };
  }
}

@Impl()
export class NumberStructSubtractImplementation<GSelf extends INumberStruct> extends SubtractTrait<GSelf, INumberStruct, INumberStruct> {
  subtract(this: GSelf, value: INumberStruct): INumberStruct {
    return { value: this.value - value.value };
  }
}

@Impl()
export class NumberStructMultiplyImplementation<GSelf extends INumberStruct> extends MultiplyTrait<GSelf, INumberStruct, INumberStruct> {
  multiply(this: GSelf, value: INumberStruct): INumberStruct {
    return { value: this.value * value.value };
  }
}

@Impl()
export class NumberStructDivideImplementation<GSelf extends INumberStruct> extends DivideTrait<GSelf, INumberStruct, INumberStruct> {
  divide(this: GSelf, value: INumberStruct): INumberStruct {
    return { value: this.value / value.value };
  }
}

/** FOR NUMBER **/

@Impl()
export class NumberNegateImplementation<GSelf extends INumber> extends NegateTrait<GSelf, INumber> {
  negate(this: GSelf): INumber {
    return new NumberLike(-this.value);
  }
}

@Impl()
export class NumberAddImplementation<GSelf extends INumber> extends AddTrait<GSelf, INumberStruct, INumber> {
  add(this: GSelf, value: INumberStruct): INumber {
    return new NumberLike(this.value + value.value);
  }
}

@Impl()
export class NumberSubtractImplementation<GSelf extends INumber> extends SubtractTrait<GSelf, INumberStruct, INumber> {
  subtract(this: GSelf, value: INumberStruct): INumber {
    return new NumberLike(this.value - value.value);
  }
}

@Impl()
export class NumberMultiplyImplementation<GSelf extends INumber> extends MultiplyTrait<GSelf, INumberStruct, INumber> {
  multiply(this: GSelf, value: INumberStruct): INumber {
    return new NumberLike(this.value * value.value);
  }
}

@Impl()
export class NumberDivideImplementation<GSelf extends INumber> extends DivideTrait<GSelf, INumberStruct, INumber> {
  divide(this: GSelf, value: INumberStruct): INumber {
    return new NumberLike(this.value / value.value);
  }
}



export interface INumberImplementations extends
  NumberStructToStringImplementation<INumber>,
  NumberNegateImplementation<INumber>,
  NumberAddImplementation<INumber>,
  NumberSubtractImplementation<INumber>,
  NumberMultiplyImplementation<INumber>
{}

export const NumberImplementations = [
  NumberStructToStringImplementation,
  NumberNegateImplementation,
  NumberAddImplementation,
  NumberSubtractImplementation,
  NumberMultiplyImplementation,
];

export interface INumberImplementationsConstructor {
  new(): INumberImplementations;
}

export interface INumber extends INumberStruct, INumberImplementations {
}

const NumberImplementationsConstructor = assembleTraitImplementations<INumberImplementationsConstructor>(NumberImplementations);

export class NumberLike extends NumberImplementationsConstructor implements INumber {
  static from(input: INumberStruct): INumber {
    return new NumberLike(input.value);
  }

  value: number;

  constructor(value: number) {
    super();
    this.value = value;
  }
}

/*-----*/

export class SuperNumber extends NumberLike {
  superParam: any;
  constructor(value: number | NumberLike) {
    super((typeof value === 'number') ? value : value.value);
    this.superParam = 'abc';
  }
}

/*-----*/

export async function debugTraitNumberLike() {
  const num1 = new NumberLike(1);
  const num2 = new NumberLike(10);
  console.log(num1.toString());
  console.log(num1.add(num2).negate().toString());
  console.log(num1.add({ value: 20 }).negate().toString());
  console.log(num1.subtract(num2).negate().toString());
  console.log(num1.multiply(num2).negate().toString());
}

