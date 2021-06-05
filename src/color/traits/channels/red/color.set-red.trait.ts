import { Trait } from '@lifaon/traits';

@Trait()
export abstract class ColorSetRedTrait<GSelf> {
  abstract setRed(this: GSelf, value: number): void;
}


