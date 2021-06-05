import { Trait } from '@lifaon/traits';

@Trait()
export abstract class AsyncActivableIsActivatedTrait<GSelf> {
  abstract isActivated(this: GSelf): Promise<boolean>;
}


