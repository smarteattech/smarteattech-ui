import React from 'react';
import type { FC } from 'react';
import type { SwitchPropsTypes } from '../../types/SwitchTypes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';
import getStyle from './style';

const Switch: FC<SwitchPropsTypes> = (props) => {
  const { currentValue, onChange } = props;
  const style = getStyle();
  const x = useSharedValue(!currentValue ? 0 : 56 - 28);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(x.value, {
            duration: 300,
          }),
        },
      ],
    };
  });

  return (
    <TouchableOpacity
      style={!currentValue ? style.wrapper : style.wrapperActive}
      activeOpacity={1}
      onPress={() => {
        x.value = currentValue ? 0 : 56 - 28;
        onChange();
      }}
    >
      <Animated.View
        style={[
          !currentValue ? style.indicator : style.indicatorActive,
          animatedStyle,
        ]}
      />
    </TouchableOpacity>
  );
};

export default Switch;
