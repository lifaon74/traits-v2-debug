import { Trait } from '@lifaon/traits';

@Trait()
export abstract class AsyncActivableDeactivateTrait<GSelf> {
  abstract deactivate(this: GSelf): Promise<void>;
}


