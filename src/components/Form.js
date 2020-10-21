import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';
import {formatDate, formatTime} from '../helpers/helpers';

const Form = ({appointments, setAppointments, setIsFormVisible}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [pacient, setPacient] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');

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
    setTime(time.toLocaleString('en-US', formatTime));
    hideTimePicker();
  };

  const showAlert = () => {
    Alert.alert(
      'Error', // Title
      'All fields are required', // Message
      [
        {
          text: 'OK',
        },
      ],
    );
  };

  const addAppointment = () => {
    if (
      pacient.trim() === '' ||
      owner.trim() === '' ||
      phone.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      symptoms.trim() === ''
    ) {
      showAlert();
      return;
    }
    let appointment = {
      pacient,
      owner,
      phone,
      date,
      time,
      symptoms,
    };
    appointment.id = shortid.generate();

    const newAppointments = [...appointments, appointment];
    setAppointments(newAppointments)
    setIsFormVisible(false)
    
  };

  return (
    <>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Pacient:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setPacient(e)}></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Owner:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setOwner(e)}></TextInput>
        </View>
        <View>
          <Text style={styles.label}>Phone Contact:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setPhone(e)}
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
            onChangeText={(e) => setSymptoms(e)}></TextInput>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => addAppointment()}
            style={styles.btnSubmit}>
            <Text style={styles.textSubmit}>Add</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
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
  btnSubmit: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#7d024e',
    borderRadius: 20,
  },
  textSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Form;
