import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AllNotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todas las Notas</Text>
      {/* Aquí puedes agregar la lógica para mostrar todas las notas */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

