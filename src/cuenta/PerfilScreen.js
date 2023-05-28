import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../utils/auth';
import { loginSuccess } from '../redux/authSlice';
import ImagePicker from 'react-native-image-picker';

const PerfilScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    signOut()
      .then(() => {
        dispatch(logout());
        dispatch(clearUser()); // Restablecer el usuario en el estado
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
    navigation.navigate('EditProfile');
  };

  const handleSelectImage = () => {
    const options = {
      title: 'Seleccionar Imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('Selección de imagen cancelada');
      } else if (response.error) {
        console.error('Error al seleccionar la imagen:', response.error);
      } else {
        const avatar = response.uri;
        dispatch(setUser({ ...user, avatar })); // Actualizar el avatar del usuario en el estado
      }
    });
  };

  const handleShowNotes = () => {
    navigation.navigate('RecordatorioScreen');
  };


  return (
    <View style={styles.container}>
      {/* {user && user.avatar && <Image source={{ uri: user.avatar }} style={styles.avatar} />}
      <Button title="Seleccionar Imagen" onPress={handleSelectImage} />
      {user && <Text style={styles.username}>{user.name}</Text>}
      <Button title="Editar Perfil" onPress={handleEditProfile} />
      <Button title="Mostrar Notas" onPress={handleShowNotes} />
      <Button title="Cerrar Sesión" onPress={handleLogout} /> */}
      <Text>Hola perfil</Text>
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

export default PerfilScreen;
