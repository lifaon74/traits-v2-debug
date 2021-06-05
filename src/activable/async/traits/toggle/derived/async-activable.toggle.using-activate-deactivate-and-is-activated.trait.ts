import { Trait } from '@lifaon/traits';
import { AsyncActivableToggleTrait } from '../async-activable.toggle.trait';
import { AsyncActivableActivateTrait } from '../../activate/async-activable.activate.trait';
import { AsyncActivableIsActivatedTrait } from '../../is-activated/async-activable.is-activated.trait';
import { AsyncActivableDeactivateTrait } from '../../deactivate/async-activable.deactivate.trait';

export interface IAsyncActivableToggleUsingActivateDeactivateAndIsActivatedTraitGSelfConstraint extends
  // traits
  AsyncActivableActivateTrait<unknown>,
  AsyncActivableDeactivateTrait<unknown>,
  AsyncActivableIsActivatedTrait<unknown>
  //
{
}

@Trait()
export abstract class AsyncActivableToggleUsingActivateDeactivateAndIsActivatedTrait< // generics
  GSelf extends IAsyncActivableToggleUsingActivateDeactivateAndIsActivatedTraitGSelfConstraint
  //
  > extends AsyncActivableToggleTrait<GSelf> {
  toggle(
    this: GSelf,
    activate?: boolean
  ): Promise<void> {
    const activatePromise: Promise<boolean> = (activate === void 0)
      ? this.isActivated().then((activated: boolean) => !activated)
      : Promise.resolve<boolean>(activate);

    return activatePromise
      .then((activate: boolean) => {
        return activate
          ? this.activate()
          : this.deactivate();
      });
  }
}


