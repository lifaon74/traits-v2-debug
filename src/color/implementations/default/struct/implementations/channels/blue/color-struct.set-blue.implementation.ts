import { Impl } from '@lifaon/traits';
import { normalizeColorValue } from '../../../../../../helpers/normalize-color-value';
import { COLOR_PRIVATE_CONTEXT, IGenericColorStruct } from '../../../color.struct';
import { ColorSetBlueTrait } from '../../../../../../traits/channels/blue/color.set-blue.trait';


@Impl()
export class ColorStructSetBlueImplementation<GSelf extends IGenericColorStruct> extends ColorSetBlueTrait<GSelf> {
  setBlue(this: GSelf, value: number): void {
    this[COLOR_PRIVATE_CONTEXT].b = normalizeColorValue(value, 'b');
  }
}
