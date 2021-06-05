import { Impl } from '@lifaon/traits';
import {
  ColorParseRGBUsingNewTrait, IColorParseRGBUsingNewTraitGSelfConstraint
} from '../../../../traits/static/parse/derived/color.parse-rgb.using-new.trait';


export interface IColorClassParseRGBImplementationGSelfConstraint<GReturn> extends
  // constraint
  IColorParseRGBUsingNewTraitGSelfConstraint<GReturn>
  //
{
}

@Impl()
export class ColorClassParseRGBImplementation<GSelf extends IColorClassParseRGBImplementationGSelfConstraint<GReturn>, GReturn> extends ColorParseRGBUsingNewTrait<GSelf, GReturn> {
}
