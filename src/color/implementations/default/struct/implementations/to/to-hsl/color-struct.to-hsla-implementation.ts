import { Impl } from '@lifaon/traits';
import {
  ColorToHSLAUsingToHSLTrait, IColorToHSLAUsingToHSLTraitGSelfConstraint
} from '../../../../../../traits/to/to-hsl/derived/color.to-hsla.using-to-hsl.trait';
import { IGenericColorStruct } from '../../../color.struct';


export interface IColorStructToHSLAImplementationGSelfConstraint extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorToHSLAUsingToHSLTraitGSelfConstraint
  //
{
}

@Impl()
export class ColorStructToHSLAImplementation<GSelf extends IColorStructToHSLAImplementationGSelfConstraint> extends ColorToHSLAUsingToHSLTrait<GSelf> {
}
