import { Trait } from '@lifaon/traits';
import { IHSLAObject } from '../../to/to-hsl/color.to-hsla-object.trait';

export interface IPartialHSLAObject extends Omit<IHSLAObject, 'a'>, Partial<Pick<IHSLAObject, 'a'>> {

}

@Trait()
export abstract class ColorFromHSLAObjectTrait<GSelf, GReturn> {
  abstract fromHSLAObject(this: GSelf, hslaObject: IPartialHSLAObject): GReturn;
}
