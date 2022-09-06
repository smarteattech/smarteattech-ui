import type { PropsWithChildren } from 'react';
import type { ImageSourcePropType, ViewProps } from 'react-native';
import type { ButtonColorType, ButtonModeType } from './ButtonTypes';

interface CartActions {
  title: string;
  color: ButtonColorType;
  mode?: ButtonModeType;
  onPress: () => void;
}

export interface CardPropsTypes extends PropsWithChildren<ViewProps> {
  title?: string;
  media?: ImageSourcePropType;
  actions?: CartActions[];
  show?: boolean;
}
