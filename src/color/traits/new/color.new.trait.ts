import { NewTrait, Trait } from '@lifaon/traits';

export type IColorNewArguments = [
  r: number,
  g: number,
  b: number,
  a: number,
];

@Trait()
export abstract class ColorNewTrait<GSelf, GReturn> extends NewTrait<GSelf, IColorNewArguments, GReturn> {
}
