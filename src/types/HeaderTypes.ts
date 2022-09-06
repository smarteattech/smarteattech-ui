import type { ReactNode } from 'react';

export interface HeaderPropsTypes {
  title: string;
  leftActionComponent?: ReactNode;
  rightActionComponent?: ReactNode;
}
