import { Card } from '@smarteattech/ui';
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Card title='Hello' show>
        <Text>Hello, world</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
