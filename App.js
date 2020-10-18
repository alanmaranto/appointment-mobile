import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Appointment from './src/components/Appointment';
const App = () => {
  const data = [
    {id: '1', pacient: 'Puppy', owner: 'Alan', symptoms: 'It does not eat'},
    {id: '2', pacient: 'Puppy2', owner: 'Alan2', symptoms: 'It does not bark'},
    {id: '3', pacient: 'Puppy2', owner: 'Alan2', symptoms: 'It does not bark'},
    {id: '4', pacient: 'Puppy2', owner: 'Alan2', symptoms: 'It does not bark'},
  ];

  const [appointments, setaApointments] = useState(data);

  const onDelete = (id) => {
    console.log('...deleting', id);
    setaApointments((actualAppointment) => {
      return actualAppointment.filter((appointment) => appointment.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Administrator</Text>
      <Text style={styles.title}>
        {appointments.length > 0
          ? 'Administrate your appointments'
          : 'There are not appointments'}
      </Text>
      <FlatList
        data={appointments}
        renderItem={({item}) => <Appointment item={item} onDelete={onDelete} />}
        keyExtractor={(appointment) => appointment.id}
      />
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
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
