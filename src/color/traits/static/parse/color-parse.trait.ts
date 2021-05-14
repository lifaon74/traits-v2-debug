import { Trait } from '@lifaon/traits';


@Trait()
export abstract class ColorParseTrait<GSelf, GReturn> {
  abstract parse(this: GSelf, input: string): GReturn;
}
