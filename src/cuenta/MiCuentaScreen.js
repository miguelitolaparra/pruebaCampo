import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux'; // Importa useSelector y useDispatch para acceder al estado global y despachar acciones

import { signOut } from '../utils/Auth'; // Importa la función de cerrar sesión desde el archivo de autenticación

const MiCuentaScreen = () => {
  const [user, setUser] = useState(null);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Obtén el estado de autenticación desde el estado global
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (isLoggedIn) {
      // Si el usuario ha iniciado sesión, obtén y establece los datos del usuario desde el estado global
      const userData = useSelector(state => state.auth.userData);
      setUser(userData);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    // Realiza la lógica para cerrar sesión, por ejemplo, llamando a la función de cerrar sesión del archivo de autenticación
    signOut()
      .then(() => {
        dispatch({ type: 'LOGOUT' }); // Despacha una acción para actualizar el estado de autenticación global
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        });
      })
      .catch(error => {
        console.error('Error al cerrar sesión:', error);
      });
  };
  
  const handleEditProfile = () => {
    // Navega a la pantalla de edición de perfil
    navigation.navigate('EditProfile');
  };

  const handleSelectImage = () => {
    // Configuración para seleccionar una imagen de la galería
    const options = {
      title: 'Seleccionar Imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // Mostrar el selector de imágenes
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('Selección de imagen cancelada');
      } else if (response.error) {
        console.error('Error al seleccionar la imagen:', response.error);
      } else {
        // Guardar la imagen seleccionada en el estado del usuario
        const avatar = response.uri;
        setUser(prevUser => ({
          ...prevUser,
          avatar,
        }));
      }
    });
  };

  const handleShowNotes = () => {
    // Navega a la pantalla de RecordatorioScreen para mostrar las notas
    navigation.navigate('RecordatorioScreen');
  };

  if (isLoggedIn) {
    // Mostrar botones de registro e inicio de sesión si el usuario no ha iniciado sesión
    return (
      <View style={styles.container}>
        <Button title="Registrarse" onPress={() => navigation.navigate('RegisterScreen')} />
        <Button title="Iniciar Sesión" onPress={() => navigation.navigate('LoginScreen')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user && user.avatar && <Image source={{ uri: user.avatar }} style={styles.avatar} />}
      <Button title="Seleccionar Imagen" onPress={handleSelectImage} />
      {user && <Text style={styles.username}>{user.name}</Text>}
      <Button title="Editar Perfil" onPress={handleEditProfile} />
      <Button title="Mostrar Notas" onPress={handleShowNotes} />
      <Button title="Cerrar Sesión" onPress={handleLogout} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MiCuentaScreen;
