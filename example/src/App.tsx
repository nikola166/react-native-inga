import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { IngaAreaView } from 'react-native-inga';

export default function App() {
  return (
    <View style={styles.container}>
      <IngaAreaView>
        <Text>{'IngaAreaView +- 60 top and bottom'}</Text>
      </IngaAreaView>
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
