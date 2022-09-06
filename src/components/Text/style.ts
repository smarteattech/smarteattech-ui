import type { TextStyle } from 'react-native';
import { Colors } from '../../constants/colors';
import { fontWeightVariants } from '../../constants/fontWeightVariants';

const getStyle = (
  color: Colors | undefined,
  fontSize: number | undefined,
  fontWeight: fontWeightVariants | undefined
): TextStyle => {
  return {
    color: color === undefined ? Colors.GRAY_DARK : color,
    fontSize: fontSize === undefined ? 12 : fontSize,
    fontWeight:
      fontWeight === undefined ? fontWeightVariants.Normal : fontWeight,
  };
};

export default getStyle;
