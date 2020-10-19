import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { formatDate, formatTime } from '../helpers/helpers'
const Form = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const onConfirmDate = (date) => {
    setDate(date.toLocaleDateString('en-US', formatDate));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const onConfirmTime = (time) => {
      setTime(time.toLocaleString('en-US', formatTime))
    hideTimePicker();
  };
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
          <Text style={styles.label}>Date:</Text>
          <Button title="Select Date" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={onConfirmDate}
            onCancel={hideDatePicker}
            headerTextIOS="Select date"
            cancelTextIOS="Cancel"
            confirmTextIOS="Confirm"
            // locale='es_ES'
          />
          <Text>{date}</Text>
        </View>

        <View>
          <Text style={styles.label}>Time:</Text>
          <Button title="Select time" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={onConfirmTime}
            onCancel={hideTimePicker}
            headerTextIOS="Select time"
            cancelTextIOS="Cancel"
            confirmTextIOS="Confirm"
            // locale="es_ES"
          />
          <Text>{time}</Text>
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
  label: {fontWeight: 'bold', fontSize: 18, marginTop: 20},
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
