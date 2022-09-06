import type { FlexAlignType, ViewProps, ViewStyle } from 'react-native';
import type { PropsWithChildren } from 'react';

export type flexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type flexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type justifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface LayoutPropsTypes extends PropsWithChildren<ViewProps> {
  p?: number;
  ph?: number;
  pv?: number;
  pt?: number;
  pl?: number;
  pb?: number;
  pr?: number;
  m?: number;
  mh?: number;
  mv?: number;
  mt?: number;
  ml?: number;
  mb?: number;
  mr?: number;
  f?: number;
  fd?: flexDirection;
  ai?: FlexAlignType;
  fw?: flexWrap;
  jc?: justifyContent;
  customStyle?: ViewStyle;
  height?: number | string;
  width?: number | string;
}
