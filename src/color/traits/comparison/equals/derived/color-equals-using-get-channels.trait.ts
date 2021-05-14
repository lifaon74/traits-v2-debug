import { Trait } from '@lifaon/traits';
import { IColorGetChannelsTraits } from '../../../channels/color-get-channels.traits.interface';
import { ColorEqualsTrait } from '../color-equals.trait';

export interface IColorEqualsUsingGetChannelsTraitGSelfConstraint extends
  // traits
  IColorGetChannelsTraits<any>
  //
{
}

export interface IColorEqualsUsingGetChannelsTraitGValue extends
  // traits
  IColorGetChannelsTraits<any>
  //
{
}

@Trait()
export abstract class ColorEqualsUsingGetChannelsTrait< // generics
  GSelf extends IColorEqualsUsingGetChannelsTraitGSelfConstraint
  //
  > extends ColorEqualsTrait<GSelf, IColorEqualsUsingGetChannelsTraitGValue> {
  equals(this: GSelf, color: IColorEqualsUsingGetChannelsTraitGValue): boolean {
    return (this.getRed() === color.getRed())
      && (this.getGreen() === color.getGreen())
      && (this.getBlue() === color.getBlue())
      && (this.getAlpha() === color.getAlpha());
  }
}


