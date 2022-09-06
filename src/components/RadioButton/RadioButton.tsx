import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Layout, Text } from '../../index';
import type { RadioButtonPropsTypes } from '../../types/RadioButtonTypes';
import getStyle from './style';

const RadioButton: FC<RadioButtonPropsTypes> = (props) => {
  const { title, currentValue, id, onChange } = props;
  const style = getStyle();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        onChange(id);
      }}
    >
      <Layout ai="center" fd="row" customStyle={style.wrapper}>
        <Layout
          height={16}
          width={16}
          ai="center"
          jc="center"
          customStyle={
            currentValue === id ? style.indicatorActive : style.indicator
          }
          mr={8}
        >
          <View
            style={
              currentValue === id
                ? style.indicatorInnerActive
                : style.indicatorInner
            }
          />
        </Layout>
        <Text>{title}</Text>
      </Layout>
    </TouchableOpacity>
  );
};

export default RadioButton;
