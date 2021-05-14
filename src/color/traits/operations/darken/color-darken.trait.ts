import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorDarkenTrait<GSelf, GReturn> {
  abstract darken(this: GSelf, amount: number): GReturn;
}


