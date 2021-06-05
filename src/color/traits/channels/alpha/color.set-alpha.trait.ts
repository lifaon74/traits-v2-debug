import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorSetAlphaTrait<GSelf> {
  abstract setAlpha(this: GSelf, value: number): void;
}


