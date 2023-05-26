import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, AsyncStorage } from 'react-native';

export default function RecordatorioScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    // Cargar las notas almacenadas en el dispositivo cuando se monte la pantalla
    loadReminders();
  }, []);

  const loadReminders = async () => {
    try {
      const remindersData = await AsyncStorage.getItem('reminders');
      if (remindersData) {
        setReminders(JSON.parse(remindersData));
      }
    } catch (error) {
      console.error('Error al cargar los recordatorios', error);
    }
  };

  const saveReminder = async () => {
    try {
      const newReminder = { id: Date.now().toString(), title, description };
      const updatedReminders = [...reminders, newReminder];
      setReminders(updatedReminders);

      await AsyncStorage.setItem('reminders', JSON.stringify(updatedReminders));

      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error al guardar el recordatorio', error);
    }
  };

  const deleteReminder = async (id) => {
    try {
      const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
      setReminders(updatedReminders);

      await AsyncStorage.setItem('reminders', JSON.stringify(updatedReminders));
    } catch (error) {
      console.error('Error al eliminar el recordatorio', error);
    }
  };

  const renderReminder = ({ item }) => (
    <View style={styles.reminderContainer}>
      <Text style={styles.reminderTitle}>{item.title}</Text>
      <Text style={styles.reminderDescription}>{item.description}</Text>
      <Button title="Eliminar" onPress={() => deleteReminder(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Añadir Recordatorio</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Guardar" onPress={saveReminder} />
      <FlatList
        data={reminders}
        renderItem={renderReminder}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  reminderContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reminderDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
});
