import { Impl } from '@lifaon/traits';
import {
  ColorToStringUsingToRGBTrait, IColorToStringUsingToRGBTraitGSelfConstraint
} from '../../../../../../traits/to/to-string/derived/color.to-string.using-to-rgb.trait';
import { IGenericColorStruct } from '../../../color.struct';

export interface IColorStructToStringImplementationGSelfConstraint extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorToStringUsingToRGBTraitGSelfConstraint
  //
{
}

@Impl()
export class ColorStructToStringImplementation<GSelf extends IColorStructToStringImplementationGSelfConstraint> extends ColorToStringUsingToRGBTrait<GSelf> {
}
