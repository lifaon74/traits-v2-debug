import { Impl } from '@lifaon/traits';
import { ColorGetBlueTrait } from '../../../../../../traits/channels/blue/color-get-blue.trait';
import { COLOR_PRIVATE_CONTEXT, IGenericColorStruct } from '../../../color.struct';


@Impl()
export class ColorStructGetBlueImplementation<GSelf extends IGenericColorStruct> extends ColorGetBlueTrait<GSelf> {
  getBlue(this: GSelf): number {
    return this[COLOR_PRIVATE_CONTEXT].b;
  }
}
