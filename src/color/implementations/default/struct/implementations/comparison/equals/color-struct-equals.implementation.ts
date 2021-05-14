import { Impl } from '@lifaon/traits';
import { IGenericColorStruct } from '../../../color.struct';
import {
  ColorEqualsUsingGetChannelsTrait, IColorEqualsUsingGetChannelsTraitGSelfConstraint
} from '../../../../../../traits/comparison/equals/derived/color-equals-using-get-channels.trait';


export interface IColorStructEqualsImplementationGSelfConstraint extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorEqualsUsingGetChannelsTraitGSelfConstraint
  //
{
}


@Impl()
export class ColorStructEqualsImplementation<GSelf extends IColorStructEqualsImplementationGSelfConstraint> extends ColorEqualsUsingGetChannelsTrait<GSelf> {
}



