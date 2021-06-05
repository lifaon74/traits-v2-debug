import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorGetRedTrait<GSelf> {
  abstract getRed(this: GSelf): number;
}


