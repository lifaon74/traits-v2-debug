import { Trait } from '@lifaon/traits';
import { ColorToHSLAObjectTrait, IHSLAObject } from '../color.to-hsla-object.trait';
import { IColorGetChannelsTraits } from '../../../channels/color.get-channels.traits.interface';


export interface IColorToHSLAObjectUsingGetChannelsTraitGSelfConstraint extends
  // traits
  IColorGetChannelsTraits<any>
  //
{
}

@Trait()
export abstract class ColorToHSLAObjectUsingGetChannelsTrait<GSelf extends IColorToHSLAObjectUsingGetChannelsTraitGSelfConstraint> extends ColorToHSLAObjectTrait<GSelf> {
  toHSLAObject(this: GSelf): IHSLAObject {
    const r: number = this.getRed();
    const g: number = this.getGreen();
    const b: number = this.getBlue();
    const a: number = this.getAlpha();

    const max: number = Math.max(r, g, b);
    const min: number = Math.min(r, g, b);

    const hslaObject: IHSLAObject = {
      h: 0,
      s: 0,
      l: (max + min) / 2,
      a: a
    };

    if (max === min) { // achromatic
      hslaObject.h = 0;
      hslaObject.s = 0;
    } else {
      const d: number = max - min;
      hslaObject.s = hslaObject.l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          hslaObject.h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          hslaObject.h = (b - r) / d + 2;
          break;
        case b:
          hslaObject.h = (r - g) / d + 4;
          break;
      }
      hslaObject.h /= 6;
    }

    return hslaObject;
  }
}


