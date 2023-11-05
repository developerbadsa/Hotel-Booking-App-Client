import { useContext } from 'react';
import { userContext } from '../Provider/AuthProvider/AuthProvider';

const UseUser = () => {
const {createUser, user, logInUser, logOut, googlelogin, loading} = useContext(userContext)

      return { createUser, user, logInUser, logOut, loading, googlelogin}
};

export default UseUser;