import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Configs/Firebase.config/Firebase.config";

export const userContext = createContext(null)

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const unSubsribe = onAuthStateChanged(auth, (user) => {
                  setUser(user)
                  setLoading(false)
            })
            return unSubsribe

      }, [])

      // create user 
      const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }
      const logInUser = (email, password)=>{

           return signInWithEmailAndPassword(auth, email, password)
      }

console.log(user)
      const LoggedUserDatas = {
            createUser, user, logInUser
      }

      return (
            <userContext.Provider value={LoggedUserDatas}>
                  {children}
            </userContext.Provider>
      )
};

export default AuthProvider;