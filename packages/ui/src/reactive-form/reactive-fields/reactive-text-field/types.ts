/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { MantineSize } from '@mantine/core';

export type TextFieldCustomProps = {
  type?: 'text' | 'number';
  size?: MantineSize;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};
