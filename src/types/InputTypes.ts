import type { TextInputProps } from 'react-native';

export interface InputPropsTypes extends TextInputProps {
  label: string;
  onInputChange: (text: string) => void;
  mask?: string;
}
