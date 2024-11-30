import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
 import { auth } from "./Firebase/Firebase_config";
export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading , setLoading]= useState(true);

    const signUp = (email , password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email,password);
    }

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const AuthInfo= {
      name:'osman goni',
      signUp,
      login,
      user,
      loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;