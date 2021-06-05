import { Trait } from '@lifaon/traits';
import { ColorLightenTrait } from '../color.lighten.trait';
import { ColorToHSLAObjectTrait, IHSLAObject } from '../../../to/to-hsl/color.to-hsla-object.trait';
import { ColorFromHSLAObjectUsingNewTrait } from '../../../static/from-hsla-object/derived/color.from-hsla-object.using-new.trait';


export interface IColorLightenUsingToAndFromHSLAObjectTraitGSelfConstraint<GReturn> extends
  // traits
  ColorToHSLAObjectTrait<any>
  //
{
  constructor: ColorFromHSLAObjectUsingNewTrait<any, GReturn>;
}


@Trait()
export abstract class ColorLightenUsingToAndFromHSLAObjectTrait< // generics
  GSelf extends IColorLightenUsingToAndFromHSLAObjectTraitGSelfConstraint<GReturn>,
  GReturn
  //
  > extends ColorLightenTrait<GSelf, GReturn> {
  lighten(this: GSelf, amount: number): GReturn {
    const hsla: IHSLAObject = this.toHSLAObject();
    hsla.l = Math.max(0, Math.min(1, hsla.l + amount));
    return this.constructor.fromHSLAObject(hsla);
    /*return CallTargetTraitMethodOrDefaultImplementation<TraitColorFromHSLAObject<any, GReturn>, 'fromHSLAObject'>(
      this.constructor,
      TraitColorFromHSLAObject,
      'fromHSLAObject',
      [hsla],
      TraitColorFromHSLAObjectUsingAlloc,
    );
     */
  }
}


