import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorGetAlphaTrait<GSelf> {
  abstract getAlpha(this: GSelf): number;
}


