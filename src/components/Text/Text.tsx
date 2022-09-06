import React from 'react';
import type { FC } from 'react';
import { Text as ReactText } from 'react-native';
import type { TextPropsTypes } from '../../types';
import getStyle from './style';

interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}

(ReactText as unknown as TextWithDefaultProps).defaultProps =
  (ReactText as unknown as TextWithDefaultProps).defaultProps || {};
(ReactText as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;

const Text: FC<TextPropsTypes> = (props) => {
  const { color, fontSize, fontWeight, children, customStyle } = props;
  return (
    <ReactText
      suppressHighlighting={true}
      selectionColor={'transparent'}
      accessibilityIgnoresInvertColors={true}
      style={[getStyle(color, fontSize, fontWeight), customStyle]}
    >
      {children}
    </ReactText>
  );
};

export default Text;
