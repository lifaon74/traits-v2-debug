import { assembleTraitImplementations, createPrivateContext } from '@lifaon/traits';
import {
  ASYNC_ACTIVABLE_PRIVATE_CONTEXT, IAsyncActivablePrivateContext, IAsyncActivableStruct
} from '../struct/async-activable.struct';
import { IAsyncActivableActivateFunction } from '../../../types/async-activable.activate-function.type';
import { IAsyncActivableDeactivateFunction } from '../../../types/async-activable.deactivate-function.type';
import { AsyncActivableStructActivateImplementation } from '../struct/implementations/async-activable-struct.activate.implementation';
import { AsyncActivableStructDeactivateImplementation } from '../struct/implementations/async-activable-struct.deactivate.implementation';
import { AsyncActivableStructToggleImplementation } from '../struct/implementations/async-observable-struct.toggle.implementation';
import { AsyncActivableStructIsActivatedImplementation } from '../struct/implementations/async-activable-struct.is-activated.implementation';

/** CONSTRUCTOR **/


export function constructAsyncActivable(
  instance: IAsyncActivableStruct,
  activate: IAsyncActivableActivateFunction,
  deactivate: IAsyncActivableDeactivateFunction,
): void {
  createPrivateContext<IAsyncActivablePrivateContext>(
    ASYNC_ACTIVABLE_PRIVATE_CONTEXT,
    instance,
    {
      activate,
      deactivate,
      pendingPromise: Promise.resolve(),
      isActivated: false,
    },
  );
}


/** CLASS **/

// FOR PROTOTYPE

export interface IAsyncActivableImplementations extends
  // implementations
  AsyncActivableStructActivateImplementation<IAsyncActivable>,
  AsyncActivableStructDeactivateImplementation<IAsyncActivable>,
  AsyncActivableStructIsActivatedImplementation<IAsyncActivable>,
  AsyncActivableStructToggleImplementation<IAsyncActivable>
  //
{
}

export const AsyncActivableImplementations = [
  AsyncActivableStructActivateImplementation,
  AsyncActivableStructDeactivateImplementation,
  AsyncActivableStructIsActivatedImplementation,
  AsyncActivableStructToggleImplementation,
];

export interface IAsyncActivableImplementationsConstructor {
  new(): IAsyncActivableImplementations;
}

export interface IAsyncActivable extends IAsyncActivableStruct, IAsyncActivableImplementations {
}


const AsyncActivableImplementationsConstructor = assembleTraitImplementations<IAsyncActivableImplementationsConstructor>(AsyncActivableImplementations);

export class AsyncActivable extends AsyncActivableImplementationsConstructor implements IAsyncActivable {
  readonly [ASYNC_ACTIVABLE_PRIVATE_CONTEXT]: IAsyncActivablePrivateContext;

  constructor(
    activate: IAsyncActivableActivateFunction,
    deactivate: IAsyncActivableDeactivateFunction,
  ) {
    super();
    constructAsyncActivable(this, activate, deactivate);
  }
}
