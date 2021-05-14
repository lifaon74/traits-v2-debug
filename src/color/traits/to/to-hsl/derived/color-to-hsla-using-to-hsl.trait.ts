import { ColorToHSLTrait } from '../color-to-hsl.trait';
import { Trait } from '@lifaon/traits';

export interface IColorToHSLAUsingToHSLTraitGSelfConstraint extends
  // traits
  ColorToHSLTrait<any>
  //
{
}

@Trait()
export abstract class ColorToHSLAUsingToHSLTrait<GSelf extends IColorToHSLAUsingToHSLTraitGSelfConstraint> {
  toHSLA(this: GSelf): string {
    return this.toHSL(true);
  }
}


