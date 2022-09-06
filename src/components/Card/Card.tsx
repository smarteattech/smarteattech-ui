import React, { useState } from 'react';
import type { FC } from 'react';
import type { CardPropsTypes } from '../../types/CardTypes';
import { Text, constants, Layout, Button } from '../../index';
import getStyle from './style';
import { Image, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Card: FC<CardPropsTypes> = (props) => {
  const { title, media, actions, show, children } = props;
  const [hidden, setHidden] = useState(false);
  const [startHeight, setStartHeight] = useState(-1);
  const [firstLoad, setFirstLoad] = useState(true);
  const style = getStyle();

  const height = useSharedValue(startHeight);
  const rotate = useSharedValue(-180);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, {
        duration: 300,
      }),
    };
  });

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(`${rotate.value}deg`, {
            duration: 300,
          }),
        },
      ],
    };
  });

  return (
    <Layout customStyle={style.card}>
      {media ? (
        <Layout customStyle={style.imageWrapper}>
          <Image style={style.image} source={media} />
        </Layout>
      ) : null}
      <Layout customStyle={style.cardInner}>
        {title !== undefined ? (
          <Layout fd="row" ai="center" jc="space-between" ph={16} pv={10}>
            <Text fontSize={16} fontWeight={constants.fontWeight.Bold}>
              {title}
            </Text>
            {show !== undefined ? (
              <TouchableOpacity
                onPress={() => {
                  setHidden(!hidden);
                  height.value = !hidden ? 0 : startHeight;
                  rotate.value = !hidden ? 0 : -180;
                }}
              >
                <Animated.Image
                  style={[style.icon, iconAnimatedStyle]}
                  source={require('../../icons/arrow-bottom.png')}
                />
              </TouchableOpacity>
            ) : null}
          </Layout>
        ) : null}
        <Animated.View style={animatedStyles}>
          <Layout
            onLayout={(event) => {
              if (firstLoad) {
                setStartHeight(event.nativeEvent.layout.height);
                setFirstLoad(false);
              }
            }}
          >
            <Layout ph={16} pb={10}>
              {children}
            </Layout>
            {actions !== undefined ? (
              <Layout fd="row" jc="space-between" ph={16} pt={10} pb={10}>
                {actions.map((item, index) => {
                  return (
                    <Button
                      key={`cardButton-${index}`}
                      title={item.title}
                      size="xs"
                      mode={item.mode === undefined ? 'link' : item.mode}
                      onPress={item.onPress}
                      color={item.color}
                    />
                  );
                })}
              </Layout>
            ) : null}
          </Layout>
        </Animated.View>
      </Layout>
    </Layout>
  );
};

export default Card;
