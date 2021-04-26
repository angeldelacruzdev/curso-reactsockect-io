import React, { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [ocultarMenu, setocultarMenu] = useState(true);

  const showMenu = () => {
    setocultarMenu(false);
  };

  const hideMenu = () => {
    setocultarMenu(true);
  };

  return (
    <UiContext.Provider value={{ ocultarMenu, showMenu, hideMenu }}>
      {children}
    </UiContext.Provider>
  );
};
