import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return (
          <div className="text-center">
            <span className="loading loading-spinner text-success"></span>;
          </div>
        );
    }

    if(user){
        return children
    }

    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateRouter;