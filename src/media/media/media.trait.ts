import { IInstanceOfTrait } from '@lifaon/traits';
import { IMediaGetSourceTrait } from './traits/media-get-source/media-get-source.trait';

export interface IMedia extends // traits
  IInstanceOfTrait<IMedia>,
  IMediaGetSourceTrait
//
{
}
