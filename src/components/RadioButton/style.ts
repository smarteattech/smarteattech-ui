import type { ViewStyle } from 'react-native';
import { constants } from '../../index';

const getStyle = (): {
  wrapper: ViewStyle;
  indicator: ViewStyle;
  indicatorActive: ViewStyle;
  indicatorInner: ViewStyle;
  indicatorInnerActive: ViewStyle;
} => {
  return {
    wrapper: {},
    indicator: {
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: constants.colors.GRAY,
      borderRadius: 8,
    },
    indicatorActive: {
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: constants.colors.PRIMARY,
      borderRadius: 8,
    },
    indicatorInner: {
      height: 8,
      width: 8,
      backgroundColor: constants.colors.TRANSPARENT,
      borderRadius: 4,
    },
    indicatorInnerActive: {
      height: 8,
      width: 8,
      backgroundColor: constants.colors.PRIMARY,
      borderRadius: 4,
    },
  };
};

export default getStyle;
