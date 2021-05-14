import { Impl } from '@lifaon/traits';
import {
  ColorDarkenUsingLightenTrait, IColorDarkenUsingLightenTraitGSelfConstraint
} from '../../../../../../traits/operations/darken/derived/color-darken-using-lighten.trait';
import { IGenericColorStruct } from '../../../color.struct';


export interface IColorStructDarkenImplementationGSelfConstraint<GReturn> extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorDarkenUsingLightenTraitGSelfConstraint<GReturn>
  //
{
}


@Impl()
export class ColorStructDarkenImplementation< // generics
  GSelf extends IColorStructDarkenImplementationGSelfConstraint<GReturn>,
  GReturn
  //
  > extends ColorDarkenUsingLightenTrait<GSelf, GReturn> {
}


