import { createInstanceOfFunction, INSTANCE_OF, NEW } from '@lifaon/traits';
import { INumber } from './number.type';
import { INumberValueOfTrait } from './traits/number-value-of.trait';

export function createNumber(
  value: number,
): INumber {

  const _new = createNumber;

  const valueOf = (): number => {
    return value;
  };

  const toString = (): string => {
    return value.toString();
  };

  // arithmetic

  const negate = (): INumber => {
    return _new(-value);
  };

  const add = (_value: INumberValueOfTrait): INumber => {
    return _new(value + _value.valueOf());
  };

  const subtract = (_value: INumberValueOfTrait): INumber => {
    return _new(value - _value.valueOf());
  };

  const multiply = (_value: INumberValueOfTrait): INumber => {
    return _new(value * _value.valueOf());
  };

  const divide = (_value: INumberValueOfTrait): INumber => {
    return _new(value / _value.valueOf());
  };

  const arithmeticTrait = {
    negate,
    add,
    subtract,
    multiply,
    divide,
  };

  // comparison

  const equals = (_value: INumberValueOfTrait): boolean => {
    return (value === _value.valueOf());
  };

  const notEquals = (_value: INumberValueOfTrait): boolean => {
    return (value === _value.valueOf());
  };

  const comparisonTrait = {
    equals,
    notEquals,
  };

  return {
    [INSTANCE_OF]: instanceOf,
    [NEW]: _new,
    valueOf,
    toString,
    ...arithmeticTrait,
    ...comparisonTrait,
  };
}

const instanceOf = createInstanceOfFunction<INumber>(createNumber);
