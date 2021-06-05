import { Impl } from '@lifaon/traits';
import { IGenericColorStruct } from '../../../color.struct';
import {
  ColorLightenUsingToAndFromHSLAObjectTrait, IColorLightenUsingToAndFromHSLAObjectTraitGSelfConstraint
} from '../../../../../../traits/operations/lighten/derived/color.lighten.using-to-and-from-hsla-object.trait';


export interface IColorStructLightenImplementationGSelfConstraint<GReturn> extends
  // struct
  IGenericColorStruct,
  // constraint
  IColorLightenUsingToAndFromHSLAObjectTraitGSelfConstraint<GReturn>
  //
{
}


@Impl()
export class ColorStructLightenImplementation< // generics
  GSelf extends IColorStructLightenImplementationGSelfConstraint<GReturn>,
  GReturn
  //
  > extends ColorLightenUsingToAndFromHSLAObjectTrait<GSelf, GReturn> {
}


