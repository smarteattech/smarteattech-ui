import type { ViewStyle } from 'react-native';
import { constants } from '../../index';

const getStyle = (): {
  header: ViewStyle;
} => {
  return {
    header: {
      shadowColor: 'rgba(120, 120, 120, .7)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: constants.colors.WHITE,
      paddingHorizontal: 25,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
  };
};

export default getStyle;
