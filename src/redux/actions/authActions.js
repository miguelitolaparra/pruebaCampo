import { loginSuccess, logout } from '../authSlice';
import { auth, firestore } from '../../utils/firebaseConfig';

// Acción para iniciar sesión
export const login = (email, password) => async (dispatch) => {
  try {
    // Lógica para autenticar al usuario con Firebase
    await firebase.auth().signInWithEmailAndPassword(email, password);

    // Obtener el usuario actualmente autenticado
    const user = firebase.auth().currentUser;

    dispatch(loginSuccess(user));
  } catch (error) {
    // Manejar cualquier error durante el inicio de sesión
    console.log('Error de inicio de sesión:', error);
  }
};

// Acción para cerrar sesión
export const logoutUser = () => async (dispatch) => {
  try {
    // Lógica para cerrar sesión con Firebase
    await firebase.auth().signOut();

    dispatch(logout());
  } catch (error) {
    // Manejar cualquier error durante el cierre de sesión
    console.log('Error al cerrar sesión:', error);
  }
};
