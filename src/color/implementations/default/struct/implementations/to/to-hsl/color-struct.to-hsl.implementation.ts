import { Impl } from '@lifaon/traits';
import {
  ColorToHSLUsingToHSLAObjectTrait, IColorToHSLUsingToHSLAObjectTraitGSelfConstraint
} from '../../../../../../traits/to/to-hsl/derived/color.to-hsl.using-to-hsla-object.trait';
import { IGenericColorStruct } from '../../../color.struct';

export interface IColorStructToHSLImplementationGSelfConstraint extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorToHSLUsingToHSLAObjectTraitGSelfConstraint
  //
{
}

@Impl()
export class ColorStructToHSLImplementation<GSelf extends IColorStructToHSLImplementationGSelfConstraint> extends ColorToHSLUsingToHSLAObjectTrait<GSelf> {
}
