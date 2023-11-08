import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Configs/Firebase.config/Firebase.config";
import axios from "axios";

export const userContext = createContext(null)

const AuthProvider = ({ children }) => {
      const provider = new GoogleAuthProvider();
      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const unSubsribe = onAuthStateChanged(auth, (user) => {

                  if (user) {
                        axios
                          .post(`https://hotel-booking-app-server-flame.vercel.app/jwt/?email=${user.email}`, user?.email, {
                            withCredentials: true, 
                          })
                          .then((res) => console.log(res))
                          .catch((error) => console.error(error));
                      }else{
                        axios.post('https://hotel-booking-app-server-flame.vercel.app/logout', user?.email, {
                              withCredentials: true, 
                            })
                        .then(res=>console.log(res))
                        .catch(res=>console.log(res))
                      }

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
      const logInUser = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }
      const logOut = () => {
            setLoading(true)
            return signOut(auth)
      }

      const googlelogin = () => {
            setLoading(true)
            return signInWithPopup(auth, provider)
      }

      console.log(user)
      const LoggedUserDatas = {
            createUser, user, logInUser, logOut, loading, googlelogin
      }

      return (
            <userContext.Provider value={LoggedUserDatas}>
                  {children}
            </userContext.Provider>
      )
};

export default AuthProvider;