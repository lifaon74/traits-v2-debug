import { Trait } from '@lifaon/traits';

@Trait()
export abstract class AsyncActivableToggleTrait<GSelf> {
  abstract toggle(this: GSelf, activate?: boolean): Promise<void>;
}


