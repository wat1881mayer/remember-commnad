import { prodDomain } from './prod';
import { devDomain } from './dev';

export const domain =
  process.env.NODE_ENV === 'production' ? prodDomain : devDomain;
