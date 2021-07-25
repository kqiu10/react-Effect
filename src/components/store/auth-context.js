import React from "react"

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

const AuthContextProvider = (props) => {
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>
}
export default AuthContext;
