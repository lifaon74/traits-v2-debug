import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorToHSLTrait<GSelf> {
  /**
   * Returns the css hsl or hsla color.
   */
  abstract toHSL(this: GSelf, alpha?: boolean): string;
}


