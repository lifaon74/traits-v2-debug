import { Impl } from '@lifaon/traits';
import { IGenericColorStruct } from '../../../color.struct';
import {
  ColorInvertUsingGetChannelsAndNew, IColorInvertUsingGetChannelsAndNewGSelfConstraint
} from '../../../../../../traits/operations/invert/derived/color-invert-using-get-channels-and-new';


export interface IColorStructInvertImplementationGSelfConstraint<GReturn> extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorInvertUsingGetChannelsAndNewGSelfConstraint<GReturn>
  //
{
}


@Impl()
export class ColorStructInvertImplementation< // generics
  GSelf extends IColorStructInvertImplementationGSelfConstraint<GReturn>,
  GReturn
  //
  > extends ColorInvertUsingGetChannelsAndNew<GSelf, GReturn> {
}


