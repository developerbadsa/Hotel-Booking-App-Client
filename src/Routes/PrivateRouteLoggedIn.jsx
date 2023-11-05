import { useNavigate } from "react-router-dom";
import UseUser from "../Hooks/UseUser";


const PrivateRouteLoggedIn = ({children}) => {

      const goto = useNavigate()

      const {user, loading} = UseUser()

      if(loading){
            return
      }

      if(!user){
return goto('/')
      }

      return children};

export default PrivateRouteLoggedIn;