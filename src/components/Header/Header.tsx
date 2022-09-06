import React, { FC } from 'react';
import { Layout, Text, constants } from '../../index';
import type { HeaderPropsTypes } from '../../types/HeaderTypes';
import getStyle from './style';

const Header: FC<HeaderPropsTypes> = (props) => {
  const { leftActionComponent, rightActionComponent, title } = props;
  const style = getStyle();
  return (
    <Layout
      height={56}
      fd={'row'}
      ai={'center'}
      jc={'space-between'}
      customStyle={style.header}
    >
      <Layout width={112} fd={'row'} jc={'flex-start'}>
        {leftActionComponent}
      </Layout>
      <Layout>
        <Text fontSize={16} fontWeight={constants.fontWeight.Bold}>
          {title}
        </Text>
      </Layout>
      <Layout width={112} fd={'row'} jc={'flex-end'}>
        {rightActionComponent}
      </Layout>
    </Layout>
  );
};

export default Header;
