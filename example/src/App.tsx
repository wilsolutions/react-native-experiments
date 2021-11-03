import * as React from 'react';

import { StyleSheet, View } from 'react-native';
// import { ExperimentsView } from 'react-native-experiments';


import { DemoView } from './DemoView';
// import { ExperimentsView } from 'react-native-experiments';

export default function App() {
  return (
    <View style={styles.container}>
      <DemoView  />
      {/* <ExperimentsView color="#32a852" style={styles.box} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  box: {
    width: 260,
    height: 460,
    marginVertical: 20,
  },
});
