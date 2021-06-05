import { Trait } from '@lifaon/traits';

@Trait()
export abstract class AsyncActivableActivateTrait<GSelf> {
  abstract activate(this: GSelf): Promise<void>;
}


