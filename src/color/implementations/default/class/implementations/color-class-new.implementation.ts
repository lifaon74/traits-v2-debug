import { Impl, NEW } from '@lifaon/traits';
import { ColorNewTrait } from '../../../../traits/new/color-new.trait';
import { Color, IColor } from '../color.class';


@Impl()
export class ColorClassNewImplementation<GSelf> extends ColorNewTrait<GSelf, IColor> {
  [NEW](this: GSelf, r: number, g: number, b: number, a: number): IColor {
    return new Color(r, g, b, a);
  }
}
