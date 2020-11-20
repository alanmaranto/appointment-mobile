/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

const Appointment = ({item, onDelete}) => {
  return (
    <View style={styles.appointment}>
      <View>
        <Text style={styles.label}>Pacient: </Text>
        <Text style={styles.text}>{item.pacient}</Text>
      </View>
      <View>
        <Text style={styles.label}>Owner: </Text>
        <Text style={styles.text}>{item.owner}</Text>
      </View>
      <View>
        <Text style={styles.label}>Symptoms: </Text>
        <Text style={styles.text}>{item.symptoms}</Text>
      </View>
      <View style={{paddingTop: 10}}>
        <TouchableHighlight
          onPress={() => onDelete(item.id)}
          style={styles.btnDelete}>
          <Text style={styles.textDelete}>Delete &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appointment: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  btnDelete: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#c52323',
    borderRadius: 20,
  },
  textDelete: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Appointment;
