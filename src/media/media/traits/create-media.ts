import { createInstanceOfFunction, INSTANCE_OF } from '@lifaon/traits';
import { IMedia } from '../media.trait';

export function createMedia(
  src: string,
): IMedia {
  const getSource = (): string => {
    return src;
  };

  return {
    [INSTANCE_OF]: instanceOf,
    getSource,
  };
}

const instanceOf = createInstanceOfFunction<IMedia>(createMedia);

