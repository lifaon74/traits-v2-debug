import { Impl } from '@lifaon/traits';
import { normalizeColorValue } from '../../../../../../helpers/normalize-color-value';
import { ColorSetRedTrait } from '../../../../../../traits/channels/red/color.set-red.trait';
import { COLOR_PRIVATE_CONTEXT, IGenericColorStruct } from '../../../color.struct';


@Impl()
export class ColorStructSetRedImplementation<GSelf extends IGenericColorStruct> extends ColorSetRedTrait<GSelf> {
  setRed(this: GSelf, value: number): void {
    this[COLOR_PRIVATE_CONTEXT].r = normalizeColorValue(value, 'r');
  }
}
