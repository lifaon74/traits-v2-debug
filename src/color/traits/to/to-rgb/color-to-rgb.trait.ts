import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorToRGBTrait<GSelf> {
  /**
   * Returns the css rgb or rgba color.
   */
  abstract toRGB(this: GSelf, alpha?: boolean): string;
}


