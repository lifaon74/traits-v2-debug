import { IAsyncActivableActivateFunction } from '../../../types/async-activable.activate-function.type';
import { IAsyncActivableDeactivateFunction } from '../../../types/async-activable.deactivate-function.type';

/** PRIVATE CONTEXT **/

export const ASYNC_ACTIVABLE_PRIVATE_CONTEXT: unique symbol = Symbol('async-activable-private-context');

export interface IAsyncActivablePrivateContext {
  readonly activate: IAsyncActivableActivateFunction;
  readonly deactivate: IAsyncActivableDeactivateFunction;
  pendingPromise: Promise<void>;
  isActivated: boolean;
}


/** STRUCT DEFINITION **/

export interface IAsyncActivableStruct {
  readonly [ASYNC_ACTIVABLE_PRIVATE_CONTEXT]: IAsyncActivablePrivateContext;
}

export type IGenericAsyncActivableStruct = IAsyncActivableStruct;
