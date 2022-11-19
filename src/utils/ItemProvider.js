import React, { useState, useContext } from "react";

const ItemContext = React.createContext();

export function useItem() {
  return useContext(ItemContext);
}


export const ItemProvider = ({ children }) => {
  const [item, setItem] = useState(null);

  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
}
