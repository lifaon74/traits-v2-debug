import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorInvertTrait<GSelf, GReturn> {
  abstract invert(this: GSelf, amount?: number): GReturn;
}


