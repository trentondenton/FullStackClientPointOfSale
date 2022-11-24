import React, { useState, useContext } from "react";

export const UserContext = React.createContext();
const UserUpdateContext = React.createContext();
const UserLogoutContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

export function useUserLogout() {
  return useContext(UserLogoutContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (user) => {
    setUser(user);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <UserUpdateContext.Provider value={updateUser}>
        <UserLogoutContext.Provider value={logoutUser}>
          {children}
        </UserLogoutContext.Provider>
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
