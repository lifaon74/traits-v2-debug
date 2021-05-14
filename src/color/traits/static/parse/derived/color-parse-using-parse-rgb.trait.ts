import { Trait } from '@lifaon/traits';
import { ColorParseTrait } from '../color-parse.trait';
import { ColorParseRGBUsingNewTrait } from './color-parse-rgb-using-new.trait';


export interface IColorParseUsingParseRGBTraitGSelfConstraint<GReturn> extends
  // traits
  ColorParseRGBUsingNewTrait<any, GReturn>
  //
{
}


@Trait()
export abstract class ColorParseUsingParseRGBTrait<GSelf extends IColorParseUsingParseRGBTraitGSelfConstraint<GReturn>, GReturn> extends ColorParseTrait<GSelf, GReturn | null> {
  parse(this: GSelf, input: string): GReturn | null {
    const element: HTMLElement = document.createElement('div');
    element.style.setProperty('color', input);

    if (element.style.getPropertyValue('color')) {
      document.body.appendChild(element);
      const style: CSSStyleDeclaration = window.getComputedStyle(element);
      const rgbColor: string = style.color;
      document.body.removeChild(element);
      return this.parseRGB(rgbColor);
    } else {
      return null;
    }
  }
}
