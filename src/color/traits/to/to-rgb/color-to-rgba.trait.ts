import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorToRGBATrait<GSelf> {
  /**
   * Returns the css rgba color.
   */
  abstract toRGBA(this: GSelf): string
}


