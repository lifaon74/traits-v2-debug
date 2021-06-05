import { Trait } from '@lifaon/traits';
import { ColorToRGBTrait } from '../color.to-rgb.trait';
import { IColorGetChannelsTraits } from '../../../channels/color.get-channels.traits.interface';

export interface IColorToRGBUsingGetChannelsTraitGSelfConstraint extends
  // traits
  IColorGetChannelsTraits<any>
  //
{
}

@Trait()
export abstract class ColorToRGBUsingGetChannelsTrait< // generics
  GSelf extends IColorToRGBUsingGetChannelsTraitGSelfConstraint
  //
  > extends ColorToRGBTrait<GSelf> {
  toRGB(this: GSelf, alpha: boolean = false): string {
    return `rgb${ alpha ? 'a' : '' }(${ Math.round(this.getRed() * 255) }, ${ Math.round(this.getGreen() * 255) }, ${ Math.round(this.getBlue() * 255) }${ alpha ? (', ' + this.getAlpha()) : '' })`;
  }
}


