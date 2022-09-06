import React, { useRef, useState } from 'react';
import type { FC } from 'react';
import { Layout } from '../../index';
import { TextInput } from 'react-native';
import type { InputPropsTypes } from '../../types/InputTypes';
import { getStyle } from './style';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Input: FC<InputPropsTypes> = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState<string>('');
  const labelTop = useSharedValue(11);
  const labelFontSize = useSharedValue(14);
  const inputRef = useRef<TextInput | null>(null);

  const labelAnimationStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(isFocus ? -5 : labelTop.value, {
        duration: 300,
      }),
      left: withTiming(isFocus ? 10 : 15, {
        duration: 300,
      }),
      fontSize: withTiming(isFocus ? 10 : labelFontSize.value),
    };
  });

  const { label, onInputChange } = props;
  const style = getStyle();
  return (
    <Layout style={style.wrapper}>
      <Animated.Text
        style={[style.label, labelAnimationStyle]}
        onPress={(): number => {
          if (isFocus) {
            inputRef.current?.blur();
            return 0;
          }

          inputRef.current?.focus();
          return 0;
        }}
      >
        {label}
      </Animated.Text>
      <TextInput
        ref={inputRef}
        style={[style.input, isFocus ? style.inputIsFocus : undefined]}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          if (value.length < 1) {
            setIsFocus(false);
          }
        }}
        value={value}
        onChangeText={(text) => {
          setValue(text);
          onInputChange(text);
        }}
        {...props}
      />
    </Layout>
  );
};

export default Input;
