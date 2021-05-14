import { Impl } from '@lifaon/traits';
import {
  ColorGrayscaleUsingGetChannelsAndNewTrait, IColorGrayscaleUsingGetChannelsAndNewTraitGSelfConstraint
} from '../../../../../../traits/operations/grayscale/derived/color-grayscale-using-get-channels-and-new.trait';
import { IGenericColorStruct } from '../../../color.struct';


export interface IColorStructGrayscaleImplementationGSelfConstraint<GReturn> extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorGrayscaleUsingGetChannelsAndNewTraitGSelfConstraint<GReturn>
  //
{
}


@Impl()
export class ColorStructGrayscaleImplementation< // generics
  GSelf extends IColorStructGrayscaleImplementationGSelfConstraint<GReturn>,
  GReturn
  //
  > extends ColorGrayscaleUsingGetChannelsAndNewTrait<GSelf, GReturn> {
}


