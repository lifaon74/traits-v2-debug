import { Trait } from '@lifaon/traits';


@Trait()
export abstract class ColorParseRGBTrait<GSelf, GReturn> {
  abstract parseRGB(this: GSelf, input: string): GReturn;
}
