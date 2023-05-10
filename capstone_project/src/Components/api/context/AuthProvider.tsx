import { createContext, useState, useContext, ReactNode } from "react";
import { MyUser } from "../../Redux/Interfaces/MyUser";

type AuthContextType = {
  auth: MyUser | null;
  setAuth: (value: MyUser | null) => void;
};

const authContextDefaultValues: AuthContextType = {
  auth: null,
  setAuth: () => {},
};

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContext = createContext<AuthContextType>(
  authContextDefaultValues
);

// const AuthContext = createContext({});
type Props = {
  children: ReactNode;
};
export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<MyUser | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
