import { Impl } from '@lifaon/traits';
import {
  ColorToRGBAUsingToRGBTrait, IColorToRGBAUsingToRGBTraitGSelfConstraint
} from '../../../../../../traits/to/to-rgb/derived/color.to-rgba.using-to-rgb.trait';
import { IGenericColorStruct } from '../../../color.struct';


export interface IColorStructToRGBAImplementationGSelfConstraint extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorToRGBAUsingToRGBTraitGSelfConstraint
  //
{
}

@Impl()
export class ColorStructToRGBAImplementation<GSelf extends IColorStructToRGBAImplementationGSelfConstraint> extends ColorToRGBAUsingToRGBTrait<GSelf> {
}
