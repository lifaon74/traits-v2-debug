import { Impl } from '@lifaon/traits';
import {
  ColorToHSLAObjectUsingGetChannelsTrait, IColorToHSLAObjectUsingGetChannelsTraitGSelfConstraint
} from '../../../../../../traits/to/to-hsl/derived/color.to-hsla-object.using-get-channels.trait';
import { IGenericColorStruct } from '../../../color.struct';


export interface IColorStructToHSLAObjectImplementationGSelfConstraint extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorToHSLAObjectUsingGetChannelsTraitGSelfConstraint
  //
{
}

@Impl()
export class ColorStructToHSLAObjectImplementation<GSelf extends IColorStructToHSLAObjectImplementationGSelfConstraint> extends ColorToHSLAObjectUsingGetChannelsTrait<GSelf> {
}
