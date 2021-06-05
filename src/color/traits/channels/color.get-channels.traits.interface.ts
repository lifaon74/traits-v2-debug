import { ColorGetRedTrait } from './red/color.get-red.trait';
import { ColorGetGreenTrait } from './green/color.get-green.trait';
import { ColorGetBlueTrait } from './blue/color.get-blue.trait';
import { ColorGetAlphaTrait } from './alpha/color.get-alpha.trait';

export interface IColorGetChannelsTraits<GSelf> extends
  // traits
  ColorGetRedTrait<GSelf>,
  ColorGetGreenTrait<GSelf>,
  ColorGetBlueTrait<GSelf>,
  ColorGetAlphaTrait<GSelf>
  //
{
}
