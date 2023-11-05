import { createContext } from "react";

export const userContext = createContext(null)

const LoggedUserDatas = {

}


const AuthProvider = ({children}) => {
      return (
            <userContext.Provider value={LoggedUserDatas}>
                  {children}
            </userContext.Provider>
      )
};

export default AuthProvider;