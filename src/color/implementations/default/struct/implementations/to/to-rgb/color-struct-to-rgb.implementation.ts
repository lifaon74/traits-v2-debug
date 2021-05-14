import { Impl } from '@lifaon/traits';
import { IGenericColorStruct } from '../../../color.struct';
import {
  ColorToRGBUsingGetChannelsTrait, IColorToRGBUsingGetChannelsTraitGSelfConstraint
} from '../../../../../../traits/to/to-rgb/derived/color-to-rgb-using-get-channels.trait';

export interface IColorStructToRGBImplementationGSelfConstraint extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorToRGBUsingGetChannelsTraitGSelfConstraint
  //
{
}

@Impl()
export class ColorStructToRGBImplementation<GSelf extends IColorStructToRGBImplementationGSelfConstraint> extends ColorToRGBUsingGetChannelsTrait<GSelf> {
}
