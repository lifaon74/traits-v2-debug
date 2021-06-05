import { Impl } from '@lifaon/traits';
import {
  ASYNC_ACTIVABLE_PRIVATE_CONTEXT, IAsyncActivablePrivateContext, IAsyncActivableStruct
} from '../async-activable.struct';
import { AsyncActivableDeactivateTrait } from '../../../../traits/deactivate/async-activable.deactivate.trait';

@Impl()
export class AsyncActivableStructDeactivateImplementation<GSelf extends IAsyncActivableStruct> extends AsyncActivableDeactivateTrait<GSelf> {
  deactivate(this: GSelf): Promise<void> {
    const context: IAsyncActivablePrivateContext = this[ASYNC_ACTIVABLE_PRIVATE_CONTEXT];

    const pendingPromise: Promise<void> = context.pendingPromise
      .then((): Promise<void> | void => {
        if (context.isActivated) {
          return context.deactivate()
            .then(() => {
              context.isActivated = false;
            }, () => {
            });
        }
      });

    context.pendingPromise = pendingPromise;

    return pendingPromise;
  }
}
