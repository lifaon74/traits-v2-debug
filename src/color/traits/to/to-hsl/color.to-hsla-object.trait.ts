import { Trait } from '@lifaon/traits';


export interface IHSLAObject {
  h: number;
  s: number;
  l: number;
  a: number;
}


@Trait()
export abstract class ColorToHSLAObjectTrait<GSelf> {
  /**
   * Returns an HSLAObject
   */
  abstract toHSLAObject(this: GSelf): IHSLAObject;
}


