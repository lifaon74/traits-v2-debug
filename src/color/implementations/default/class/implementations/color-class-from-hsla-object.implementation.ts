import { Impl } from '@lifaon/traits';
import {
  ColorFromHSLAObjectUsingNewTrait, IColorFromHSLAObjectUsingNewTraitGSelfConstraint
} from '../../../../traits/static/from-hsla-object/derived/color-from-hsla-object-using-new.trait';


export interface IColorClassFromHSLAObjectImplementationGSelfConstraint<GReturn> extends
  // constraint
  IColorFromHSLAObjectUsingNewTraitGSelfConstraint<GReturn>
  //
{
}

@Impl()
export class ColorClassFromHSLAObjectImplementation<GSelf extends IColorClassFromHSLAObjectImplementationGSelfConstraint<GReturn>, GReturn> extends ColorFromHSLAObjectUsingNewTrait<GSelf, GReturn> {
}
