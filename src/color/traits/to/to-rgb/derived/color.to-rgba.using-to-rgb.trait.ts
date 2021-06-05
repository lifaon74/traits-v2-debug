import { Trait } from '@lifaon/traits';
import { ColorToRGBTrait } from '../color.to-rgb.trait';
import { ColorToRGBATrait } from '../color.to-rgba.trait';

export interface IColorToRGBAUsingToRGBTraitGSelfConstraint extends
  // traits
  ColorToRGBTrait<any>
  //
{
}

@Trait()
export abstract class ColorToRGBAUsingToRGBTrait<GSelf extends IColorToRGBAUsingToRGBTraitGSelfConstraint> extends ColorToRGBATrait<GSelf> {
  toRGBA(this: GSelf): string {
    return this.toRGB(true);
  }
}


