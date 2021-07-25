import React, { useState }from "react"

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem('IsLoggedIn');
    setIsLoggedIn(false);
  }
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  return <AuthContext.Provider>{props.children}</AuthContext.Provider>
}
export default AuthContext;
