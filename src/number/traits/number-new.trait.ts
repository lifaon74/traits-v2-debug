import { INewFunction, INewTrait } from '@lifaon/traits';

export type INumberNewArguments = [
  value: number,
];

export type INumberNewFunction<GReturn> = INewFunction<INumberNewArguments, GReturn>;
export type INumberNewTrait<GReturn> = INewTrait<INumberNewArguments, GReturn>;
