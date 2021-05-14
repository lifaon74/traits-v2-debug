import { Impl } from '@lifaon/traits';
import { COLOR_PRIVATE_CONTEXT, IGenericColorStruct } from '../../../color.struct';
import { ColorSetGreenTrait } from '../../../../../../traits/channels/green/color-set-green.trait';
import { normalizeColorValue } from '../../../../../../helpers/normalize-color-value';


@Impl()
export class ColorStructSetGreenImplementation<GSelf extends IGenericColorStruct> extends ColorSetGreenTrait<GSelf> {
  setGreen(this: GSelf, value: number): void {
    this[COLOR_PRIVATE_CONTEXT].g = normalizeColorValue(value, 'g');
  }
}
