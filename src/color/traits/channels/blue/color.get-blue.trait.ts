import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorGetBlueTrait<GSelf> {
  abstract getBlue(this: GSelf): number;
}


