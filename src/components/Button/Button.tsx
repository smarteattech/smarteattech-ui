import React from 'react';
import type { FC } from 'react';
import type { ButtonPropsTypes } from '../../types';
import { TouchableHighlight } from 'react-native';
import { constants, Text } from '../../index';
import getStyle from './style';

const Button: FC<ButtonPropsTypes> = (props) => {
  const { title, color, size, mode, isFullWidth } = props;
  const styles = getStyle(color, mode, size, isFullWidth);
  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor={styles.backgroundPressColor}
      style={styles.style}
      {...props}
    >
      <Text
        fontSize={styles.fontSize}
        fontWeight={constants.fontWeight.Bold}
        color={styles.textColor}
      >
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;
