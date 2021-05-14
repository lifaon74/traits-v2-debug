import { Impl } from '@lifaon/traits';
import { COLOR_PRIVATE_CONTEXT, IGenericColorStruct } from '../../../color.struct';
import { ColorGetAlphaTrait } from '../../../../../../traits/channels/alpha/color-get-alpha.trait';


@Impl()
export class ColorStructGetAlphaImplementation<GSelf extends IGenericColorStruct> extends ColorGetAlphaTrait<GSelf> {
  getAlpha(this: GSelf): number {
    return this[COLOR_PRIVATE_CONTEXT].a;
  }
}
