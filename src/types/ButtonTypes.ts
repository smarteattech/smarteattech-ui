import type { TouchableHighlightProps } from 'react-native';

export type ButtonColorType =
  | 'primary'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'white';
export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonModeType = 'link' | 'outline' | 'default';

export interface ButtonPropsTypes extends TouchableHighlightProps {
  color?: ButtonColorType;
  size?: ButtonSizeType;
  mode?: ButtonModeType;
  title: string;
  icon?: string;
  isFullWidth?: boolean;
}
