
// import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
   GoogleAuthProvider,
   signInWithPopup,
   sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase";

/*
##########################################################
Este archivo es para almacener el estado de la autenticacion y funciones 
Relacionadas.
Retorna un elemento global que permite tener presente el estado del usuario.

Para utilizarlo ya esta el hook seteado solo se tiene que llamar en el elmento 
que se quiera implementar es decir

se importa la funcion auth
import { useAuth } from '.client\src\context\AuthContext.js';                   // depende donde estes parado

se desctructura segun lo que se ocupe:

const {
   signup,           // Funcion para crear  usuario requiere email y password, al menos
   login,            // Funcion para logear usuario requiere email y password, al menos
   user,             // Objeto que retorna firebase || si no esta logeado es null
   usersimple,
   logout,           // self explanatory
   loading,          // limbo entre logear y no loeago y logeado
   loginWithGoogle,  // self explanatory
   resetPassword,    // self explanatory
} = useAuth()

##########################################################
*/


const authContext = createContext();

export const useAuth = () => {
   const context = useContext(authContext);
   if (!context) throw new Error("There is no Auth provider");
   return context;
};

export function AuthProvider({ children }) {
   const [user, setUser] = useState(null);
   const [usersimple, setUsersimple] = useState(null);
   const [loading, setLoading] = useState(true);

   const signup = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const loginWithGoogle = () => {
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider);
   };

   const logout = () => signOut(auth);

   const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

   useEffect(() => {
      const unsubuscribe = onAuthStateChanged(auth, async (currentUser) => {
         console.log('herrmienta de debug')
         setUser(currentUser);
         setLoading(false);
      });
      return () => unsubuscribe();
   }, []);


   return (
      <authContext.Provider
         value={{
            signup,
            login,
            user,
            usersimple,
            logout,
            loading,
            loginWithGoogle,
            resetPassword,
         }}
      >
         {children}
      </authContext.Provider>
   );
}