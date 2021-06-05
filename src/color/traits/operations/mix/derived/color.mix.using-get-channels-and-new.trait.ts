import { NEW, Trait } from '@lifaon/traits';
import { IColorGetChannelsTraits } from '../../../channels/color.get-channels.traits.interface';
import { ColorMixTrait } from '../color.mix.trait';
import { ColorNewTrait } from '../../../new/color.new.trait';


export interface IColorMixUsingGetChannelsAndNewGSelfConstraint<GReturn> extends
  // traits
  IColorGetChannelsTraits<any>,
  ColorNewTrait<any, GReturn>
  //
{
}

export interface IColorMixUsingGetChannelsAndNewGColorConstraint extends
  // traits
  IColorGetChannelsTraits<any>
  //
{
}

@Trait()
export abstract class ColorMixUsingGetChannelsAndNewTrait< // generics
  GSelf extends IColorMixUsingGetChannelsAndNewGSelfConstraint<GReturn>,
  GColor extends IColorMixUsingGetChannelsAndNewGColorConstraint,
  GReturn
  //
  > extends ColorMixTrait<GSelf, GColor, GReturn> {
  mix(this: GSelf, color: GColor, proportion: number): GReturn {
    if ((0 <= proportion) && (proportion <= 1)) {
      const _proportion: number = 1 - proportion;
      return this[NEW](
        ((this.getRed() * _proportion) + (color.getRed() * proportion)),
        ((this.getGreen() * _proportion) + (color.getGreen() * proportion)),
        ((this.getBlue() * _proportion) + (color.getBlue() * proportion)),
        ((this.getAlpha() * _proportion) + (color.getAlpha() * proportion)),
      );
    } else {
      throw new RangeError(`Expected 'proportion' in the range [0, 1]`);
    }
  }
}


