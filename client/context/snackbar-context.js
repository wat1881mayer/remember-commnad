import React, { useState, createContext } from 'react';

export const SnackbarContext = createContext();

export const SnackbarContextProvider = (props) => {
  const [snackState, setSnackState] = useState({
    isOpen: false,
    type: '',
    message: '',
  });

  const toggleSnack = (isOpen, type, message) => {
    setSnackState({
      isOpen: isOpen,
      type: type,
      message: message,
    });
  };

  return (
    <SnackbarContext.Provider value={{ snackState, toggleSnack }}>
      {props.children}
    </SnackbarContext.Provider>
  );
};
