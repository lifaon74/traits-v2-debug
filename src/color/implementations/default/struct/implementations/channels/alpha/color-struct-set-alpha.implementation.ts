import { Impl } from '@lifaon/traits';
import { COLOR_PRIVATE_CONTEXT, IGenericColorStruct } from '../../../color.struct';
import { ColorSetAlphaTrait } from '../../../../../../traits/channels/alpha/color-set-alpha.trait';
import { normalizeColorValue } from '../../../../../../helpers/normalize-color-value';

@Impl()
export class ColorStructSetAlphaImplementation<GSelf extends IGenericColorStruct> extends ColorSetAlphaTrait<GSelf> {
  setAlpha(this: GSelf, value: number): void {
    this[COLOR_PRIVATE_CONTEXT].a = normalizeColorValue(value, 'a');
  }
}
