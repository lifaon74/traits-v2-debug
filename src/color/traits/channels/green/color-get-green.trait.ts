import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorGetGreenTrait<GSelf> {
  abstract getGreen(this: GSelf): number;
}


