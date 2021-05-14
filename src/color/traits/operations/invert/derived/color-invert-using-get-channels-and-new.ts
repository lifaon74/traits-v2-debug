import { NEW, Trait } from '@lifaon/traits';
import { ColorInvertTrait } from '../color-invert.trait';
import { IColorGetChannelsTraits } from '../../../channels/color-get-channels.traits.interface';
import { ColorNewTrait } from '../../../new/color-new.trait';


export interface IColorInvertUsingGetChannelsAndNewGSelfConstraint<GReturn> extends
  // traits
  IColorGetChannelsTraits<any>,
  ColorNewTrait<any, GReturn>
  //
{
}


@Trait()
export abstract class ColorInvertUsingGetChannelsAndNew< // generics
  GSelf extends IColorInvertUsingGetChannelsAndNewGSelfConstraint<GReturn>,
  GReturn
  //
  > extends ColorInvertTrait<GSelf, GReturn> {
  invert(this: GSelf, amount: number = 1): GReturn {
    if ((0 <= amount) && (amount <= 1)) {
      return this[NEW](
        amount * (1 - this.getRed()) + (1 - amount) * this.getRed(),
        amount * (1 - this.getGreen()) + (1 - amount) * this.getGreen(),
        amount * (1 - this.getBlue()) + (1 - amount) * this.getBlue(),
        this.getAlpha(),
      );
    } else {
      throw new RangeError(`Expected 'amount' in the range [0, 1]`);
    }
  }
}


