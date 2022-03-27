import { IArithmeticTrait, IComparisonTrait, IInstanceOfTrait, IToStringTrait } from '@lifaon/traits';
import { INumberNewTrait } from './traits/number-new.trait';
import { INumberValueOfTrait } from './traits/number-value-of.trait';


export interface INumber extends //
  IInstanceOfTrait<INumber>,
  INumberNewTrait<INumber>,
  INumberValueOfTrait,
  IToStringTrait,
  IArithmeticTrait<INumberValueOfTrait, INumber>,
  IComparisonTrait<INumberValueOfTrait>
  //
{
}
