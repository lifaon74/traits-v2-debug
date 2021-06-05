import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorSetGreenTrait<GSelf> {
  abstract setGreen(this: GSelf, value: number): void;
}


