import React, { useState, createContext } from "react";

export const AppContext = createContext(null);
const AppContextProvider = ({ children }) => {
  const [subModal, setSubModal] = useState(false);

  const toggleSubModal = () => {
    setSubModal(!subModal);
  };

  const contextValues = {
    subModal,
    toggleSubModal,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
