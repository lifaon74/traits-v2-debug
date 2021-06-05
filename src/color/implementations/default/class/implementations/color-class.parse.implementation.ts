import { Impl } from '@lifaon/traits';
import {
  ColorParseUsingParseRGBTrait, IColorParseUsingParseRGBTraitGSelfConstraint
} from '../../../../traits/static/parse/derived/color.parse.using-parse-rgb.trait';


export interface IColorClassParseImplementationGSelfConstraint<GReturn> extends
  // constraint
  IColorParseUsingParseRGBTraitGSelfConstraint<GReturn>
  //
{
}

@Impl()
export class ColorClassParseImplementation<GSelf extends IColorClassParseImplementationGSelfConstraint<GReturn>, GReturn> extends ColorParseUsingParseRGBTrait<GSelf, GReturn> {
}
