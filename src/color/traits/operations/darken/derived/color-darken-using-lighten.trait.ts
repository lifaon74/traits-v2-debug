import { Trait } from '@lifaon/traits';
import { ColorDarkenTrait } from '../color-darken.trait';
import { ColorLightenTrait } from '../../lighten/color-lighten.trait';


export interface IColorDarkenUsingLightenTraitGSelfConstraint<GReturn> extends
  // traits
  ColorLightenTrait<any, GReturn>
  //
{
}


@Trait()
export abstract class ColorDarkenUsingLightenTrait< // generics
  GSelf extends IColorDarkenUsingLightenTraitGSelfConstraint<GReturn>,
  GReturn
  //
  > extends ColorDarkenTrait<GSelf, GReturn> {
  darken(this: GSelf, amount: number): GReturn {
    return this.lighten(-amount);
  }
}


