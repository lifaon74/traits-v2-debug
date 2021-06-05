import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorSetBlueTrait<GSelf> {
  abstract setBlue(this: GSelf, value: number): void;
}


