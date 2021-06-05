import { Impl } from '@lifaon/traits';
import { IGenericColorStruct } from '../../../color.struct';
import {
  ColorMixUsingGetChannelsAndNewTrait, IColorMixUsingGetChannelsAndNewGColorConstraint,
  IColorMixUsingGetChannelsAndNewGSelfConstraint
} from '../../../../../../traits/operations/mix/derived/color.mix.using-get-channels-and-new.trait';


export interface IColorStructMixImplementationGSelfConstraint<GReturn> extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorMixUsingGetChannelsAndNewGSelfConstraint<GReturn>
  //
{
}

export interface IColorStructMixImplementationGColorConstraint extends
  // constraint
  IColorMixUsingGetChannelsAndNewGColorConstraint
  //
{
}


@Impl()
export class ColorStructMixImplementation< // generics
  GSelf extends IColorStructMixImplementationGSelfConstraint<GReturn>,
  GColor extends IColorStructMixImplementationGColorConstraint,
  GReturn
  //
  > extends ColorMixUsingGetChannelsAndNewTrait<GSelf, GColor, GReturn> {
}


