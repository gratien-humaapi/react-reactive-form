/* eslint-disable import/prefer-default-export */
import { ReactiveFieldErrorType } from '@reactive-fields/types';
import { getValuePath } from '@utils';

export const getError = (fieldKey: string, errors: ReactiveFieldErrorType) => {
  const paths = fieldKey.split('.');

  const hasErrors = errors ? getValuePath(paths, errors) : undefined;
  return hasErrors;
};
