import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  Platform,
} from 'react-native';
import Appointment from './src/components/Appointment';
import Form from './src/components/Form';

const App = () => {
  const data = [
    {id: '1', pacient: 'Puppy', owner: 'Alan', symptoms: 'It does not eat'},
    {id: '2', pacient: 'Puppy2', owner: 'Alan2', symptoms: 'It does not bark'},
    {id: '3', pacient: 'Puppy2', owner: 'Alan2', symptoms: 'It does not bark'},
    {id: '4', pacient: 'Puppy2', owner: 'Alan2', symptoms: 'It does not bark'},
  ];
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [appointments, setAppointments] = useState(data);

  const onDelete = (id) => {
    console.log('...deleting', id);
    setAppointments((actualAppointment) => {
      return actualAppointment.filter((appointment) => appointment.id !== id);
    });
  };

  const showForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Administrator</Text>
      <View>
        <TouchableHighlight
          onPress={() => showForm()}
          style={styles.btnShowForm}>
          <Text style={styles.textShowForm}>Show Form</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.content}>
        {isFormVisible ? (
          <>
            <Text style={styles.title}>Add new appointment</Text>
            <Form
              appointments={appointments}
              setAppointments={setAppointments}
              setIsFormVisible={setIsFormVisible}
            />
          </>
        ) : (
          <>
            <Text style={styles.title}>
              {appointments.length > 0
                ? 'Administrate your appointments'
                : 'There are not appointments'}
            </Text>
            <FlatList
              style={styles.content}
              data={appointments}
              renderItem={({item}) => (
                <Appointment item={item} onDelete={onDelete} />
              )}
              keyExtractor={(appointment) => appointment.id}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  title: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  list: {
    flex: 1,
  },
  btnShowForm: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#7d024e',
  },
  textShowForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
