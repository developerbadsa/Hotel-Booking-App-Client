import { useNavigate } from "react-router-dom";
import UseUser from "../Hooks/UseUser";
import Loading from "../Layout/Components/Loading_spinner/Loading";
import { useEffect } from "react";


const LoggedOutPrivate = ({children}) => {

      const goto = useNavigate();
      const { user, loading } = UseUser();
    
      useEffect(() => {
        if (loading) {
          <Loading></Loading>
        } else if (user) {
          goto('/');
        }
      }, [loading, user, goto]);
    
      if (loading) {
        return <Loading />;
      } else if (user) {
        return ; 
      }
    
      return children;

};

export default LoggedOutPrivate;