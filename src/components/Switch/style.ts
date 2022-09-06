import type { ViewStyle } from 'react-native';
import { constants } from '../../index';

const getStyle = (): {
  wrapper: ViewStyle;
  wrapperActive: ViewStyle;
  indicator: ViewStyle;
  indicatorActive: ViewStyle;
} => {
  return {
    wrapper: {
      backgroundColor: constants.colors.GRAY_BLUE,
      height: 28,
      width: 56,
      borderRadius: 14,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: constants.colors.GRAY_BLUE,
    },
    wrapperActive: {
      backgroundColor: constants.colors.PRIMARY_LIGHT,
      height: 28,
      width: 56,
      borderRadius: 14,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: constants.colors.PRIMARY_LIGHT,
    },
    indicator: {
      height: 24,
      width: 24,
      borderRadius: 12,
      backgroundColor: constants.colors.GRAY,
    },
    indicatorActive: {
      height: 24,
      width: 24,
      borderRadius: 12,
      backgroundColor: constants.colors.PRIMARY,
    },
  };
};

export default getStyle;
