import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Administrator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  title: {
    color: '#FFF',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
