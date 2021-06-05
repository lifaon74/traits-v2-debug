import { Impl } from '@lifaon/traits';

import { AsyncActivableActivateTrait } from '../../../../traits/activate/async-activable.activate.trait';
import {
  ASYNC_ACTIVABLE_PRIVATE_CONTEXT, IAsyncActivablePrivateContext, IAsyncActivableStruct
} from '../async-activable.struct';

@Impl()
export class AsyncActivableStructActivateImplementation<GSelf extends IAsyncActivableStruct> extends AsyncActivableActivateTrait<GSelf> {
  activate(this: GSelf): Promise<void> {
    const context: IAsyncActivablePrivateContext = this[ASYNC_ACTIVABLE_PRIVATE_CONTEXT];

    const pendingPromise: Promise<void> = context.pendingPromise
      .then((): Promise<void> | void => {
        if (!context.isActivated) {
          return context.activate()
            .then(() => {
              context.isActivated = true;
            }, () => {
            });
        }
      });

    context.pendingPromise = pendingPromise;

    return pendingPromise;
  }
}
