import { Impl } from '@lifaon/traits';

import {
  ASYNC_ACTIVABLE_PRIVATE_CONTEXT, IAsyncActivablePrivateContext, IAsyncActivableStruct
} from '../async-activable.struct';
import { AsyncActivableIsActivatedTrait } from '../../../../traits/is-activated/async-activable.is-activated.trait';

@Impl()
export class AsyncActivableStructIsActivatedImplementation<GSelf extends IAsyncActivableStruct> extends AsyncActivableIsActivatedTrait<GSelf> {
  isActivated(this: GSelf): Promise<boolean> {
    const context: IAsyncActivablePrivateContext = this[ASYNC_ACTIVABLE_PRIVATE_CONTEXT];
    return context.pendingPromise
      .then(() => context.isActivated);
  }
}
