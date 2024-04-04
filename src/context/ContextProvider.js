import React, { createContext, useContext, useState } from "react";


const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [state, setState] = useState(initialState);

  const [isClicked, setIsClicked] = useState(initialState);
  
  const handleClick = (clicked) => {
   
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const [sceernSize, setScreenSize] = useState(undefined);

  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("light");

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const [themeSettings, setThemeSettings] = useState(false);

  return (
   

    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        sceernSize,
        setScreenSize,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        currentColor,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
