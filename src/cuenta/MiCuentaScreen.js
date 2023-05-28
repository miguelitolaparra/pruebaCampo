/* import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../utils/auth';
import { loginSuccess } from '../redux/authSlice';
import ImagePicker from 'react-native-image-picker';

const MiCuentaScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (isLoggedIn) {
      // Realizar alguna acción adicional aquí si es necesario
    }
  }, [isLoggedIn]);

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

  if (!user) {
    return (
      <View style={styles.container}>
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

export default MiCuentaScreen; */

/* import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MiCuentaScreen from '../screens/MiCuentaScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const MiCuentaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MiCuenta"
        component={MiCuentaNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MiCuentaNavigator = ({ navigation }) => {
  // Aquí obtenemos el estado de autenticación, por ejemplo, desde Redux
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // Renderizamos condicionalmente el componente correcto en función del estado de autenticación
  return isLoggedIn ? (
    <MiCuentaScreen navigation={navigation} />
  ) : (
    <LoginButton navigation={navigation} />
  );
};

const LoginButton = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Iniciar Sesión" onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
};

export default MiCuentaStack;
 */


/* 


 */
/* 
import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../utils/auth';
import { loginSuccess } from '../redux/authSlice';
import ImagePicker from 'react-native-image-picker';

const MiCuentaScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (!isLoggedIn) {
      // Realizar alguna acción adicional aquí si el usuario no ha iniciado sesión
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

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
      {!isLoggedIn && (
        <View style={styles.container}>
          <Button title="Entra Dentro" onPress={handleLogin} />
        </View>
      )}
      {isLoggedIn && (
        <View style={styles.container}>
          {user && user.avatar && <Image source={{ uri: user.avatar }} style={styles.avatar} />}
          <Button title="Seleccionar Imagen" onPress={handleSelectImage} />
          {user && <Text style={styles.username}>{user.name}</Text>}
          <Button title="Editar Perfil" onPress={handleEditProfile} />
          <Button title="Mostrar Notas" onPress={handleShowNotes} />
          <Button title="Cerrar Sesión" onPress={handleLogout} />
        </View>
      )}
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
    marginBottom: 10,
  },
});

export default MiCuentaScreen;
 */

/* 
import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../utils/auth';
import { loginSuccess } from '../redux/authSlice';
import ImagePicker from 'react-native-image-picker';

const MiCuentaScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (isLoggedIn) {
      // Realizar alguna acción adicional aquí si es necesario
    }
  }, [isLoggedIn]);

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
    <View>
      {user ? (
    
        <React.Fragment>
          <Text>Bienvenido, {user.displayName}</Text>
          <Text>Email: {user.email}</Text>
          <Button title="Cerrar sesión" onPress={handleLogout} />
         Aquí puedes agregar el resto del contenido que deseas mostrar 
        </React.Fragment>
      ) : (
        
        <Button title="Entra Majete" onPress={() => navigation.navigate('LoginScreen')}  />
      )}
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

export default MiCuentaScreen;  */

/* 


import * as firebase from 'firebase';
import { auth } from '../utils/firebaseConfig'
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { login, logoutUser } from '../redux/actions/authActions';



const MiCuentaScreen = () => {
 
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logoutUser());
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch(login(user));
      })
      .catch(error => {
        // Manejo de errores al iniciar sesión
      });
  };

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        dispatch(logoutUser());
      })
      .catch(error => {
        // Manejo de errores al cerrar sesión
      });
  };

  return (
    <View>
      {user ? (
        Mostrar el contenido cuando el usuario ha iniciado sesión
        <React.Fragment>
          <Text>Bienvenido, {user.displayName}</Text>
          <Text>Email: {user.email}</Text>
          <Button title="Cerrar sesión" onPress={handleLogout} />
         Aquí puedes agregar el resto del contenido que deseas mostrar 
        </React.Fragment>
      ) : (
         Mostrar el botón "Entra Majete" cuando el usuario no ha iniciado sesión
        <Button title="Entra Majete" onPress={handleLogin} />
      )}
    </View>
  );
};

export default MiCuentaScreen; */

import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../utils/auth';
import { logoutSuccess, logout, clearUser } from '../redux/authSlice';
import ImagePicker from 'react-native-image-picker';

const MiCuentaScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (!isLoggedIn) {
      // Realizar alguna acción adicional aquí si el usuario no ha iniciado sesión
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

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
      {!isLoggedIn ? (
        <Button title="Entra Dentro" onPress={handleLogin} />
      ) : (
        <React.Fragment>
          {user && user.avatar && <Image source={{ uri: user.avatar }} style={styles.avatar} />}
          <Button title="Seleccionar Imagen" onPress={handleSelectImage} />
          {user && <Text style={styles.username}>{user.name}</Text>}
          <Button title="Editar Perfil" onPress={handleEditProfile} />
          <Button title="Mostrar Notas" onPress={handleShowNotes} />
          <Button title="Cerrar Sesión" onPress={handleLogout} />
        </React.Fragment>
      )}
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
    marginBottom: 10,
  },
});

export default MiCuentaScreen;
