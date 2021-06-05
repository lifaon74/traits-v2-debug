import { ColorToHexTrait } from '../color.to-hex.trait';
import { Trait } from '@lifaon/traits';
import { IColorGetChannelsTraits } from '../../../channels/color.get-channels.traits.interface';
import { numberToHex } from '../../../../helpers/number-to-hex';

export interface IColorToHexUsingGetChannelsTraitGSelfConstraint extends
  // traits
  IColorGetChannelsTraits<any>
  //
{
}

@Trait()
export abstract class ColorToHexUsingGetChannelsTrait<GSelf extends IColorToHexUsingGetChannelsTraitGSelfConstraint> extends ColorToHexTrait<GSelf> {
  toHex(this: GSelf, alpha: boolean = false): string {
    return `#${ numberToHex(Math.round(this.getRed() * 255), 2) }${ numberToHex(Math.round(this.getGreen() * 255), 2) }${ numberToHex(Math.round(this.getBlue() * 255), 2) }${ (alpha ? numberToHex(Math.round(this.getAlpha() * 255), 2) : '') }`;
  }
}


