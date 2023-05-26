import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FitosanitaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabajos Fitosanitarios</Text>
      {/* Aquí puedes agregar la lógica y componentes para mostrar los trabajos fitosanitarios */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});
