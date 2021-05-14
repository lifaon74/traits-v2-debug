import { Trait } from '@lifaon/traits';
import { ColorToHSLAObjectTrait, IHSLAObject } from '../color-to-hsla-object.trait';
import { ColorToHSLTrait } from '../color-to-hsl.trait';

export interface IColorToHSLUsingToHSLAObjectTraitGSelfConstraint extends
  // traits
  ColorToHSLAObjectTrait<any>
  //
{
}

@Trait()
export abstract class ColorToHSLUsingToHSLAObjectTrait<GSelf extends IColorToHSLUsingToHSLAObjectTraitGSelfConstraint> extends ColorToHSLTrait<GSelf> {
  toHSL(this: GSelf, alpha: boolean = false): string {
    const hsla: IHSLAObject = this.toHSLAObject();
    return `hsl${ alpha ? 'a' : '' }(${ hsla.h * 360 }, ${ hsla.s * 100 }%, ${ hsla.l * 100 }%${ alpha ? (', ' + hsla.a) : '' })`;
  }
}


