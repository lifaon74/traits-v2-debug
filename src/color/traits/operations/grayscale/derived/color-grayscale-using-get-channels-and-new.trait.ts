import { NEW, Trait } from '@lifaon/traits';
import { IColorGetChannelsTraits } from '../../../channels/color-get-channels.traits.interface';
import { ColorGrayscaleTrait, IGrayScaleMode } from '../color-grayscale.trait';
import { ColorNewTrait } from '../../../new/color-new.trait';


export interface IColorGrayscaleUsingGetChannelsAndNewTraitGSelfConstraint<GReturn> extends
  // traits
  IColorGetChannelsTraits<any>,
  ColorNewTrait<any, GReturn>
  //
{
}


@Trait()
export abstract class ColorGrayscaleUsingGetChannelsAndNewTrait< // generics
  GSelf extends IColorGrayscaleUsingGetChannelsAndNewTraitGSelfConstraint<GReturn>,
  GReturn
  //
  > extends ColorGrayscaleTrait<GSelf, GReturn> {
  grayscale(this: GSelf, mode: IGrayScaleMode = 'luminosity'): GReturn {
    let c: number;
    switch (mode) {
      case 'average':
        c = (this.getRed() + this.getGreen() + this.getBlue()) / 3;
        break;
      case 'lightness':
        c = (Math.max(this.getRed(), this.getGreen(), this.getBlue()) + Math.min(this.getRed(), this.getGreen(), this.getBlue())) / 2;
        break;
      case 'luminosity':
        c = 0.21 * this.getRed() + 0.72 * this.getGreen() + 0.07 * this.getBlue();
        break;
      default:
        throw new TypeError(`Unexpected grayscale's mode: '${ mode }'`);
    }
    return this[NEW](c, c, c, this.getAlpha());
  }
}


