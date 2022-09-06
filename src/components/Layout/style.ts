import type { FlexAlignType, ViewStyle } from 'react-native';
import type {
  flexDirection,
  flexWrap,
  justifyContent,
} from '../../types/LayoutTypes';

const getStyle = (
  p: number | undefined,
  ph: number | undefined,
  pv: number | undefined,
  pt: number | undefined,
  pl: number | undefined,
  pb: number | undefined,
  pr: number | undefined,
  m: number | undefined,
  mh: number | undefined,
  mv: number | undefined,
  mt: number | undefined,
  ml: number | undefined,
  mb: number | undefined,
  mr: number | undefined,
  f: number | undefined,
  fd: flexDirection | undefined,
  ai: FlexAlignType | undefined,
  fw: flexWrap | undefined,
  jc: justifyContent | undefined,
  height: number | string | undefined,
  width: number | string | undefined
): ViewStyle => {
  return {
    padding: p,
    paddingHorizontal: ph,
    paddingVertical: pv,
    paddingTop: pt,
    paddingLeft: pl,
    paddingBottom: pb,
    paddingRight: pr,
    margin: m,
    marginHorizontal: mh,
    marginVertical: mv,
    marginTop: mt,
    marginLeft: ml,
    marginBottom: mb,
    marginRight: mr,
    flex: f,
    flexDirection: fd === undefined ? 'column' : fd,
    flexWrap: fw,
    alignItems: ai,
    justifyContent: jc,
    height: height === undefined ? 'auto' : height,
    width: width === undefined ? 'auto' : height,
  };
};

export default getStyle;
