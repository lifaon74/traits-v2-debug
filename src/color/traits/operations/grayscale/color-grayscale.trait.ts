import { Trait } from '@lifaon/traits';

export type IGrayScaleMode =
  'lightness'
  | 'average'
  | 'luminosity'; // (default)

@Trait()
export abstract class ColorGrayscaleTrait<GSelf, GReturn> {
  abstract grayscale(this: GSelf, mode?: IGrayScaleMode): GReturn;
}


