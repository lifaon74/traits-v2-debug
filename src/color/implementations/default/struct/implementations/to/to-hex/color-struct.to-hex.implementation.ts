import { Impl } from '@lifaon/traits';
import {
  ColorToHexUsingGetChannelsTrait, IColorToHexUsingGetChannelsTraitGSelfConstraint
} from '../../../../../../traits/to/to-hex/derived/color.to-hex.using-get-channels.trait';
import { IGenericColorStruct } from '../../../color.struct';

export interface IColorStructToHexImplementationGSelfConstraint extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorToHexUsingGetChannelsTraitGSelfConstraint
  //
{
}

@Impl()
export class ColorStructToHexImplementation<GSelf extends IColorStructToHexImplementationGSelfConstraint> extends ColorToHexUsingGetChannelsTrait<GSelf> {
}
