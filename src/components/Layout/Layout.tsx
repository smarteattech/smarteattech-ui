import React from 'react';
import type { FC } from 'react';
import { View } from 'react-native';
import type { LayoutPropsTypes } from '../../types/LayoutTypes';
import getStyle from './style';

const Layout: FC<LayoutPropsTypes> = (props) => {
  const {
    p,
    ph,
    pv,
    pt,
    pl,
    pb,
    pr,
    m,
    mh,
    mv,
    mt,
    ml,
    mb,
    mr,
    f,
    fd,
    ai,
    fw,
    jc,
    customStyle,
    children,
    height,
    width,
  } = props;
  const defaultStyle = getStyle(
    p,
    ph,
    pv,
    pt,
    pl,
    pb,
    pr,
    m,
    mh,
    mv,
    mt,
    ml,
    mb,
    mr,
    f,
    fd,
    ai,
    fw,
    jc,
    height,
    width
  );
  return (
    <View style={[defaultStyle, customStyle]} {...props}>
      {children}
    </View>
  );
};

export default Layout;
