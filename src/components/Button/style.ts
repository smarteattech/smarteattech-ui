import type {
  ButtonColorType,
  ButtonModeType,
  ButtonSizeType,
} from '../../types/ButtonTypes';
import { constants } from '../../index';
import type { ViewStyle } from 'react-native';
import type { Colors } from '../../constants/colors';

export const getColor = (color: ButtonColorType, mode: ButtonModeType) => {
  const result = {
    backgroundColor: constants.colors.TRANSPARENT,
    backgroundPressColor: constants.colors.TRANSPARENT,
    borderColor: constants.colors.TRANSPARENT,
    textColor: constants.colors.GRAY_DARK,
  };

  if (mode === 'default') {
    switch (color) {
      case 'primary':
        result.backgroundColor = constants.colors.PRIMARY;
        result.backgroundPressColor = constants.colors.PRIMARY_DARK;
        result.borderColor = constants.colors.PRIMARY;
        result.textColor = constants.colors.PRIMARY_LIGHT;
        break;
      case 'warning':
        result.backgroundColor = constants.colors.WARNING;
        result.backgroundPressColor = constants.colors.WARNING_DARK;
        result.borderColor = constants.colors.WARNING;
        result.textColor = constants.colors.WARNING_LIGHT;
        break;
      case 'danger':
        result.backgroundColor = constants.colors.DANGER;
        result.backgroundPressColor = constants.colors.DANGER_DARK;
        result.borderColor = constants.colors.DANGER;
        result.textColor = constants.colors.DANGER_LIGHT;
        break;
      case 'dark':
        result.backgroundColor = constants.colors.GRAY_DARK;
        result.backgroundPressColor = constants.colors.GRAY_DARK;
        result.borderColor = constants.colors.GRAY_DARK;
        result.textColor = constants.colors.GRAY_BLUE;
        break;
      case 'white':
        result.backgroundColor = constants.colors.WHITE;
        result.backgroundPressColor = constants.colors.WHITE;
        result.borderColor = constants.colors.WHITE;
        result.textColor = constants.colors.GRAY_DARK;
        break;
    }
  }

  if (mode === 'outline') {
    switch (color) {
      case 'primary':
        result.borderColor = constants.colors.PRIMARY;
        result.textColor = constants.colors.PRIMARY;
        result.backgroundPressColor = constants.colors.PRIMARY_LIGHT;

        break;
      case 'warning':
        result.borderColor = constants.colors.WARNING;
        result.textColor = constants.colors.WARNING;
        result.backgroundPressColor = constants.colors.WARNING_LIGHT;

        break;
      case 'danger':
        result.borderColor = constants.colors.DANGER;
        result.textColor = constants.colors.DANGER;
        result.backgroundPressColor = constants.colors.DANGER_LIGHT;

        break;
      case 'dark':
        result.borderColor = constants.colors.GRAY_DARK;
        result.textColor = constants.colors.GRAY_DARK;
        result.backgroundPressColor = constants.colors.GRAY_BLUE;

        break;
      case 'white':
        result.borderColor = constants.colors.WHITE;
        result.textColor = constants.colors.WHITE;
        result.backgroundPressColor = constants.colors.GRAY_ULTRALIGHT;

        break;
    }
  }

  if (mode === 'link') {
    switch (color) {
      case 'primary':
        result.textColor = constants.colors.PRIMARY;
        result.backgroundPressColor = constants.colors.PRIMARY_LIGHT;
        break;
      case 'warning':
        result.textColor = constants.colors.WARNING;
        result.backgroundPressColor = constants.colors.WARNING_LIGHT;

        break;
      case 'danger':
        result.textColor = constants.colors.DANGER;
        result.backgroundPressColor = constants.colors.DANGER_LIGHT;
        break;
      case 'dark':
        result.textColor = constants.colors.GRAY_DARK;
        result.backgroundPressColor = constants.colors.GRAY_BLUE;
        break;
      case 'white':
        result.textColor = constants.colors.WHITE;
        result.backgroundPressColor = constants.colors.GRAY_ULTRALIGHT;
        break;
    }
  }

  return result;
};

export const getSize = (size: ButtonSizeType) => {
  const result = {
    fontSize: 16,
    paddingHorizontal: 25,
    paddingVertical: 18,
  };

  switch (size) {
    case 'xs':
      result.fontSize = 12;
      result.paddingHorizontal = 20;
      result.paddingVertical = 7;
      break;
    case 'sm':
      result.fontSize = 14;
      result.paddingHorizontal = 25;
      result.paddingVertical = 11;
      break;
    case 'md':
      result.fontSize = 16;
      result.paddingHorizontal = 27;
      result.paddingVertical = 13;
      break;
    case 'lg':
      result.fontSize = 18;
      result.paddingHorizontal = 30;
      result.paddingVertical = 15;
      break;
  }

  return result;
};

const getStyle = (
  color: ButtonColorType | undefined,
  mode: ButtonModeType | undefined,
  size: ButtonSizeType | undefined,
  fullWidth: boolean | undefined
): {
  style: ViewStyle;
  textColor: Colors;
  backgroundPressColor: Colors;
  fontSize: number;
} => {
  const colors = getColor(
    color === undefined ? 'primary' : color,
    mode === undefined ? 'default' : mode
  );
  const sizes = getSize(size === undefined ? 'md' : size);
  return {
    style: {
      backgroundColor: colors.backgroundColor,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: colors.borderColor,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: sizes.paddingHorizontal,
      paddingVertical: sizes.paddingVertical,
      shadowColor:
        mode === 'default' ? 'rgba(120, 120, 120, .7)' : 'transparent',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: mode === 'default' ? 5 : 0,
      width: fullWidth ? '100%' : 'auto',
    },
    textColor: colors.textColor,
    backgroundPressColor: colors.backgroundPressColor,
    fontSize: sizes.fontSize,
  };
};

export default getStyle;
