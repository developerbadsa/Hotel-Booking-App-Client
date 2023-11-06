import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseUser from "../Hooks/UseUser";
import Loading from "../Layout/Components/Loading_spinner/Loading";

const PrivateRouteLoggedIn = ({ children }) => {
  const goto = useNavigate();
  const { user, loading } = UseUser();

  useEffect(() => {
    if (loading) {
      <Loading></Loading>
    } else if (!user) {
      goto('/login');
    }
  }, [loading, user, goto]);

  if (loading) {
    return <Loading />;
  } else if (!user) {
    return null; 
  }

  return children;
};

export default PrivateRouteLoggedIn;
