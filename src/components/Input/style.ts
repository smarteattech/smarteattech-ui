import type { TextStyle, ViewStyle } from 'react-native';
import { constants } from '../../index';

export const getStyle = (): {
  wrapper: ViewStyle;
  input: TextStyle;
  inputIsFocus: TextStyle;
  label: TextStyle;
} => {
  return {
    wrapper: {
      position: 'relative',
      width: '100%',
    },
    input: {
      backgroundColor: constants.colors.GRAY_ULTRALIGHT,
      borderStyle: 'solid',
      borderColor: constants.colors.GRAY_BLUE,
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 5,
      fontSize: 14,
    },
    inputIsFocus: {
      backgroundColor: constants.colors.GRAY_ULTRALIGHT,
      shadowColor: 'rgba(120, 120, 120, .7)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    label: {
      backgroundColor: constants.colors.GRAY_ULTRALIGHT,
      paddingHorizontal: 5,
      position: 'absolute',
      color: constants.colors.GRAY,
      left: 15,
      zIndex: 9,
      fontSize: 14,
    },
  };
};
