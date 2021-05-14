import { Trait } from '@lifaon/traits';
import { ColorToStringTrait } from '../color-to-string.trait';
import { ColorToRGBTrait } from '../../to-rgb/color-to-rgb.trait';

export interface IColorToStringUsingToRGBTraitGSelfConstraint extends
  // traits
  ColorToRGBTrait<any>
  //
{
}

@Trait()
export abstract class ColorToStringUsingToRGBTrait<GSelf extends IColorToStringUsingToRGBTraitGSelfConstraint> extends ColorToStringTrait<GSelf> {
  toString(this: GSelf): string {
    return this.toRGB(true);
  }
}


