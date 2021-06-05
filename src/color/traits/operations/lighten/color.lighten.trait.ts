import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorLightenTrait<GSelf, GReturn> {
  abstract lighten(this: GSelf, amount: number): GReturn;
}


