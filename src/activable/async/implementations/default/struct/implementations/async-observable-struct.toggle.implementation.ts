import { Impl } from '@lifaon/traits';
import { IAsyncActivableStruct } from '../async-activable.struct';
import {
  AsyncActivableToggleUsingActivateDeactivateAndIsActivatedTrait,
  IAsyncActivableToggleUsingActivateDeactivateAndIsActivatedTraitGSelfConstraint
} from '../../../../traits/toggle/derived/async-activable.toggle.using-activate-deactivate-and-is-activated.trait';

export interface IAsyncActivableStructToggleImplementationGSelfConstraint extends
  // struct
  IAsyncActivableStruct,
  // constraint
  IAsyncActivableToggleUsingActivateDeactivateAndIsActivatedTraitGSelfConstraint
  //
{
}

@Impl()
export class AsyncActivableStructToggleImplementation<GSelf extends IAsyncActivableStructToggleImplementationGSelfConstraint> extends AsyncActivableToggleUsingActivateDeactivateAndIsActivatedTrait<GSelf> {
}
