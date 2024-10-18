import { ApiError } from 'next/dist/server/api-utils';

export function isApiError(x: unknown) {
  if (x && typeof x === 'object' && 'code' in x) {
    return true;
  }
  return false;
}
