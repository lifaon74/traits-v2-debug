import { NEW, Trait } from '@lifaon/traits';
import { ColorNewTrait } from '../../../new/color-new.trait';
import { ColorFromHSLAObjectTrait, IPartialHSLAObject } from '../color-from-hsla-object.trait';


function hueToRGB(p: number, q: number, t: number): number {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}


export interface IColorFromHSLAObjectUsingNewTraitGSelfConstraint<GReturn> extends
  // traits
  ColorNewTrait<any, GReturn>
  //
{
}


@Trait()
export abstract class ColorFromHSLAObjectUsingNewTrait<GSelf extends IColorFromHSLAObjectUsingNewTraitGSelfConstraint<GReturn>, GReturn> extends ColorFromHSLAObjectTrait<GSelf, GReturn> {
  fromHSLAObject(this: GSelf, hslaObject: IPartialHSLAObject): GReturn {
    let r: number, g: number, b: number;

    if (hslaObject.s === 0) {
      r = g = b = hslaObject.l; // achromatic
    } else {
      const q: number = hslaObject.l < 0.5 ? hslaObject.l * (1 + hslaObject.s) : hslaObject.l + hslaObject.s - hslaObject.l * hslaObject.s;
      const p: number = 2 * hslaObject.l - q;
      r = hueToRGB(p, q, hslaObject.h + 1 / 3);
      g = hueToRGB(p, q, hslaObject.h);
      b = hueToRGB(p, q, hslaObject.h - 1 / 3);
    }

    return this[NEW](
      r,
      g,
      b,
      hslaObject.a ? (hslaObject.a) : 1
    );
  }
}
