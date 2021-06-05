import { Impl } from '@lifaon/traits';
import { COLOR_PRIVATE_CONTEXT, IGenericColorStruct } from '../../../color.struct';
import { ColorGetGreenTrait } from '../../../../../../traits/channels/green/color.get-green.trait';


@Impl()
export class ColorStructGetGreenImplementation<GSelf extends IGenericColorStruct> extends ColorGetGreenTrait<GSelf> {
  getGreen(this: GSelf): number {
    return this[COLOR_PRIVATE_CONTEXT].g;
  }
}
