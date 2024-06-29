import { createContext, useContext } from "react";
import { useLocalStorage } from "react-use";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("token", "");

  const authData = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default AuthProvider;
