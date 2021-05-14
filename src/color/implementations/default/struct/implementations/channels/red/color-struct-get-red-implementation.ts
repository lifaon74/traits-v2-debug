import { Impl } from '@lifaon/traits';
import { ColorGetRedTrait } from '../../../../../../traits/channels/red/color-get-red.trait';
import { COLOR_PRIVATE_CONTEXT, IGenericColorStruct } from '../../../color.struct';


@Impl()
export class ColorStructGetRedImplementation<GSelf extends IGenericColorStruct> extends ColorGetRedTrait<GSelf> {
  getRed(this: GSelf): number {
    return this[COLOR_PRIVATE_CONTEXT].r;
  }
}
