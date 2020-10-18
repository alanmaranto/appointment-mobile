import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const Form = () => {
  return (
    <>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Pacient:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => console.log(text)}></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Owner:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => console.log(text)}></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Phone Contact:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => console.log(text)}
            keyboardType="numeric"></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Symptoms:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(text) => console.log(text)}></TextInput>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {fontSize: 'bold', fontSize: 18, marginTop: 20},
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
});

export default Form;
