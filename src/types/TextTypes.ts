import type { PropsWithChildren } from 'react';
import type { TextProps, TextStyle } from 'react-native';
import type { Colors } from 'src/constants/colors';
import type { fontWeightVariants } from 'src/constants/fontWeightVariants';

interface TextPropsTypes extends PropsWithChildren<TextProps> {
  color?: Colors;
  fontSize?: number;
  fontWeight?: fontWeightVariants;
  customStyle?: TextStyle;
}

export default TextPropsTypes;
