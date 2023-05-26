import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//import firebase from './firebaseConfig';
import { auth } from './firebaseConfig'

//const auth = getAuth(firebase);

// Registrar un nuevo usuario con correo electrónico y contraseña
export const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuario registrado:", user);
  } catch (error) {
    console.log("Error al registrar usuario:", error);
  }
};

// Iniciar sesión con correo electrónico y contraseña
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuario inició sesión:", user);
  } catch (error) {
    console.log("Error al iniciar sesión:", error);
  }
};

// Cerrar la sesión actual
export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

// Exportar instancia de autenticación de Firebase
//export default auth;

