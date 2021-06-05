import { NEW, Trait } from '@lifaon/traits';
import { ColorParseRGBTrait } from '../color.parse-rgb.trait';
import { ColorNewTrait } from '../../../new/color.new.trait';
import { parseNumberLikeValue } from '../../../../helpers/parse-number-like-value';


const NUMBER_PATTERN: string = '\\s*(\\d+(?:\\.\\d+)?%?)\\s*';
const RGBA_REGEXP: RegExp = new RegExp(`rgb(a)?\\(${NUMBER_PATTERN},${NUMBER_PATTERN},${NUMBER_PATTERN}(?:,${NUMBER_PATTERN})?\\)`);

export interface IColorParseRGBUsingNewTraitGSelfConstraint<GReturn> extends
  // traits
  ColorNewTrait<any, GReturn>
  //
{
}


@Trait()
export abstract class ColorParseRGBUsingNewTrait<GSelf extends IColorParseRGBUsingNewTraitGSelfConstraint<GReturn>, GReturn> extends ColorParseRGBTrait<GSelf, GReturn> {
  parseRGB(this: GSelf, input: string): GReturn {
    RGBA_REGEXP.lastIndex = 0;
    const match: RegExpExecArray | null = RGBA_REGEXP.exec(input);
    if ((match !== null) && (typeof match[1] === typeof match[5])) { // check if 3 params for rgb and 4 for rgba
      return this[NEW](
        parseNumberLikeValue(match[2], 0, 255) / 255,
        parseNumberLikeValue(match[3], 0, 255) / 255,
        parseNumberLikeValue(match[4], 0, 255) / 255,
        (match[5] === void 0)
          ? 1
          : parseNumberLikeValue(match[5], 0, 1)
      );
    } else {
      throw new Error(`Invalid rgb(a) color: ${ input }`);
    }
  }
}
