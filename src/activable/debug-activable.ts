import { AsyncActivable } from './async/implementations/default/class/async-activable.class';


export async function debugActivable1() {
  const activable = new AsyncActivable(
    () => {
      console.log('activate some stuff');
      return Promise.resolve();
    },
    () => {
      console.log('deactivate some stuff');
      return Promise.resolve();
    },
  );

  await activable.activate();
  await activable.deactivate();
  console.log(await activable.isActivated());
  await activable.toggle();
}

/*---------------*/

export async function debugActivable() {
  await debugActivable1();
}


