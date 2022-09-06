import type { ImageStyle, ViewStyle } from 'react-native';
import { constants } from '../../index';

const getStyle = (): {
  card: ViewStyle;
  cardInner: ViewStyle;
  imageWrapper: ViewStyle;
  image: ImageStyle;
  icon: ImageStyle;
} => {
  return {
    card: {
      backgroundColor: constants.colors.WHITE,
      borderRadius: 5,
      shadowColor: 'rgba(120, 120, 120, .7)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardInner: {
      overflow: 'hidden',
    },
    imageWrapper: {
      overflow: 'hidden',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    image: {
      height: 240,
      maxWidth: '100%',
    },
    icon: {
      height: 16,
      width: 16,
    },
  };
};

export default getStyle;
